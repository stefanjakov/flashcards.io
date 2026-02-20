import { z } from "zod";

import { Prisma } from "../../../../generated/prisma";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const DEFAULT_LEARN_BATCH_SIZE = 7;
const MAX_LEARN_BATCH_SIZE = 50;

const learnBatchInput = z.object({
  studySetId: z.number().int().positive(),
  limit: z
    .number()
    .int()
    .min(1)
    .max(MAX_LEARN_BATCH_SIZE)
    .default(DEFAULT_LEARN_BATCH_SIZE),
  random: z.boolean().default(false),
  retryIds: z.array(z.number().int().positive()).default([]),
  batchKey: z.number().int().optional(),
});

const submitLearnBatchInput = z.object({
  studySetId: z.number().int().positive(),
  results: z
    .array(
      z.object({
        flashCardId: z.number().int().positive(),
        correct: z.boolean(),
      }),
    )
    .min(1),
});

const setInput = z.object({
  studySetId: z.number().int().positive(),
});

const shuffleInPlace = <T>(items: T[]) => {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    const temp = items[i];
    items[i] = items[swapIndex] as T;
    items[swapIndex] = temp as T;
  }
  return items;
};

export const flashCardRouter = createTRPCRouter({
  getCurrentStudySet: publicProcedure.query(async ({ ctx }) => {
    const state = await ctx.db.appState.findUnique({
      where: { id: 1 },
      select: { currentStudySetId: true },
    });
    return { studySetId: state?.currentStudySetId ?? null };
  }),

  deleteStudySet: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.studySet.delete({
        where: {
          id: input.id,
        },
      });
    }),

  setCurrentStudySet: publicProcedure
    .input(setInput)
    .mutation(async ({ ctx, input }) => {
      const setExists = await ctx.db.studySet.findUnique({
        where: { id: input.studySetId },
        select: { id: true },
      });
      if (!setExists) {
        throw new Error("Study set not found");
      }

      const state = await ctx.db.appState.upsert({
        where: { id: 1 },
        update: { currentStudySetId: input.studySetId },
        create: { id: 1, currentStudySetId: input.studySetId },
        select: { currentStudySetId: true },
      });

      return { studySetId: state.currentStudySetId };
    }),

  getStudySets: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.studySet.findMany({
      orderBy: [{ createdAt: "asc" }, { id: "asc" }],
      select: {
        id: true,
        name: true,
        _count: {
          select: { cards: true },
        },
      },
    });
  }),

  getLearnBatch: publicProcedure
    .input(learnBatchInput)
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? DEFAULT_LEARN_BATCH_SIZE;
      const retryIds = Array.from(new Set(input.retryIds));

      const retryCards =
        retryIds.length > 0
          ? await ctx.db.flashCard.findMany({
            where: { id: { in: retryIds }, studySetId: input.studySetId },
          })
          : [];

      const retryOrder = new Map(retryIds.map((id, index) => [id, index]));
      retryCards.sort(
        (a, b) =>
          (retryOrder.get(a.id) ?? 0) - (retryOrder.get(b.id) ?? 0),
      );

      const trimmedRetryCards = retryCards.slice(0, limit);
      const remainingCount = Math.max(0, limit - trimmedRetryCards.length);
      if (remainingCount === 0) {
        return trimmedRetryCards;
      }

      const where =
        retryIds.length > 0
          ? { id: { notIn: retryIds }, progress: null, studySetId: input.studySetId }
          : { progress: null, studySetId: input.studySetId };

      let nextCards: typeof trimmedRetryCards = [];
      if (input.random) {
        const candidates = await ctx.db.flashCard.findMany({
          where,
        });
        shuffleInPlace(candidates);
        nextCards = candidates.slice(0, remainingCount);
      } else {
        nextCards = await ctx.db.flashCard.findMany({
          where,
          orderBy: [{ createdAt: "asc" }, { id: "asc" }],
          take: remainingCount,
        });
      }

      return [...trimmedRetryCards, ...nextCards];
    }),

  submitLearnBatch: publicProcedure
    .input(submitLearnBatchInput)
    .mutation(async ({ ctx, input }) => {
      const requestedResults = Array.from(
        new Map(input.results.map((result) => [result.flashCardId, result]))
          .values(),
      );
      const cardsInSet = await ctx.db.flashCard.findMany({
        where: {
          studySetId: input.studySetId,
          id: { in: requestedResults.map((result) => result.flashCardId) },
        },
        select: { id: true },
      });

      const allowedIds = new Set(cardsInSet.map((card) => card.id));
      const uniqueResults = requestedResults.filter((result) =>
        allowedIds.has(result.flashCardId),
      );

      const correctIds = uniqueResults
        .filter((result) => result.correct)
        .map((result) => result.flashCardId);
      const incorrectIds = uniqueResults
        .filter((result) => !result.correct)
        .map((result) => result.flashCardId);

      const buildValues = (ids: number[], correct: boolean) =>
        Prisma.join(
          ids.map((id) =>
            Prisma.sql`(${id}, ${correct ? 1 : 0}, ${correct ? 0 : 1}, ${correct ? 1 : 0
              }, ${false})`,
          ),
        );

      const queries: ReturnType<typeof ctx.db.$executeRaw>[] = [];

      if (correctIds.length > 0) {
        queries.push(
          ctx.db.$executeRaw(Prisma.sql`
            INSERT INTO "public"."FlashCardProgress" ("flashCardId","correctCount","incorrectCount","streak","mastered")
            VALUES ${buildValues(correctIds, true)}
            ON CONFLICT ("flashCardId") DO UPDATE
            SET "correctCount" = "public"."FlashCardProgress"."correctCount" + EXCLUDED."correctCount",
                "incorrectCount" = "public"."FlashCardProgress"."incorrectCount" + EXCLUDED."incorrectCount",
                "streak" = "public"."FlashCardProgress"."streak" + EXCLUDED."streak"
          `),
        );
      }

      if (incorrectIds.length > 0) {
        queries.push(
          ctx.db.$executeRaw(Prisma.sql`
            INSERT INTO "public"."FlashCardProgress" ("flashCardId","correctCount","incorrectCount","streak","mastered")
            VALUES ${buildValues(incorrectIds, false)}
            ON CONFLICT ("flashCardId") DO UPDATE
            SET "correctCount" = "public"."FlashCardProgress"."correctCount" + EXCLUDED."correctCount",
                "incorrectCount" = "public"."FlashCardProgress"."incorrectCount" + EXCLUDED."incorrectCount",
                "streak" = 0,
                "mastered" = FALSE
          `),
        );
      }

      if (queries.length > 0) {
        await ctx.db.$transaction(queries);
      }

      const wrongIds = uniqueResults
        .filter((result) => !result.correct)
        .map((result) => result.flashCardId);

      return { wrongIds };
    }),

  getLearnProgress: publicProcedure.input(setInput).query(async ({ ctx, input }) => {
    const [totalCards, progressAgg, masteredCount] = await ctx.db.$transaction([
      ctx.db.flashCard.count({ where: { studySetId: input.studySetId } }),
      ctx.db.flashCardProgress.aggregate({
        where: { flashCard: { studySetId: input.studySetId } },
        _count: { _all: true },
        _sum: { correctCount: true, incorrectCount: true },
        _max: { streak: true },
      }),
      ctx.db.flashCardProgress.count({
        where: { mastered: true, flashCard: { studySetId: input.studySetId } },
      }),
    ]);

    const seenCount = progressAgg._count._all ?? 0;
    const unseenCount = Math.max(0, totalCards - seenCount);
    const inProgressCount = Math.max(0, seenCount - masteredCount);

    return {
      totalCards,
      seenCount,
      unseenCount,
      inProgressCount,
      masteredCount,
      correctCount: progressAgg._sum.correctCount ?? 0,
      incorrectCount: progressAgg._sum.incorrectCount ?? 0,
      maxStreak: progressAgg._max.streak ?? 0,
    };
  }),

  resetLearnProgress: publicProcedure.input(setInput).mutation(async ({ ctx, input }) => {
    const deleted = await ctx.db.flashCardProgress.deleteMany({
      where: { flashCard: { studySetId: input.studySetId } },
    });
    return { deleted: deleted.count };
  }),
});
