import { z } from "zod";

import { Prisma } from "../../../../generated/prisma";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const DEFAULT_LEARN_BATCH_SIZE = 7;
const MAX_LEARN_BATCH_SIZE = 50;

const learnBatchInput = z.object({
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

  const learnAnswerInput = z.object({
    flashCardId: z.number().int().positive(),
    correct: z.boolean(),
  });

const submitLearnBatchInput = z.object({
  results: z
    .array(
      z.object({
        flashCardId: z.number().int().positive(),
        correct: z.boolean(),
      }),
    )
    .min(1),
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
  getLearnBatch: publicProcedure
    .input(learnBatchInput)
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? DEFAULT_LEARN_BATCH_SIZE;
      const retryIds = Array.from(new Set(input.retryIds));

      const retryCards =
        retryIds.length > 0
          ? await ctx.db.flashCard.findMany({
            where: { id: { in: retryIds } },
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
          ? { id: { notIn: retryIds }, progress: null }
          : { progress: null };

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

  recordLearnAnswer: publicProcedure
    .input(learnAnswerInput)
    .mutation(async ({ ctx, input }) => {
      const update = input.correct
        ? {
          correctCount: { increment: 1 },
          streak: { increment: 1 },
        }
        : {
          incorrectCount: { increment: 1 },
          streak: 0,
          mastered: false,
        };

      const create = input.correct
        ? {
          flashCardId: input.flashCardId,
          correctCount: 1,
          incorrectCount: 0,
          streak: 1,
          mastered: false,
        }
        : {
          flashCardId: input.flashCardId,
          correctCount: 0,
          incorrectCount: 1,
          streak: 0,
          mastered: false,
        };

      return ctx.db.flashCardProgress.upsert({
        where: { flashCardId: input.flashCardId },
        update,
        create,
      });
    }),

  submitLearnBatch: publicProcedure
    .input(submitLearnBatchInput)
    .mutation(async ({ ctx, input }) => {
      const uniqueResults = Array.from(
        new Map(input.results.map((result) => [result.flashCardId, result]))
          .values(),
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
            Prisma.sql`(${id}, ${correct ? 1 : 0}, ${correct ? 0 : 1}, ${
              correct ? 1 : 0
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

  getLearnProgress: publicProcedure.query(async ({ ctx }) => {
    const [totalCards, progressAgg, masteredCount] = await ctx.db.$transaction([
      ctx.db.flashCard.count(),
      ctx.db.flashCardProgress.aggregate({
        _count: { _all: true },
        _sum: { correctCount: true, incorrectCount: true },
        _max: { streak: true },
      }),
      ctx.db.flashCardProgress.count({ where: { mastered: true } }),
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

  resetLearnProgress: publicProcedure.mutation(async ({ ctx }) => {
    const deleted = await ctx.db.flashCardProgress.deleteMany();
    return { deleted: deleted.count };
  }),
});
