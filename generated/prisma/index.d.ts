
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model FlashCard
 * 
 */
export type FlashCard = $Result.DefaultSelection<Prisma.$FlashCardPayload>
/**
 * Model FlashCardProgress
 * 
 */
export type FlashCardProgress = $Result.DefaultSelection<Prisma.$FlashCardProgressPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FlashCards
 * const flashCards = await prisma.flashCard.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more FlashCards
   * const flashCards = await prisma.flashCard.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.flashCard`: Exposes CRUD operations for the **FlashCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlashCards
    * const flashCards = await prisma.flashCard.findMany()
    * ```
    */
  get flashCard(): Prisma.FlashCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flashCardProgress`: Exposes CRUD operations for the **FlashCardProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlashCardProgresses
    * const flashCardProgresses = await prisma.flashCardProgress.findMany()
    * ```
    */
  get flashCardProgress(): Prisma.FlashCardProgressDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    FlashCard: 'FlashCard',
    FlashCardProgress: 'FlashCardProgress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "flashCard" | "flashCardProgress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FlashCard: {
        payload: Prisma.$FlashCardPayload<ExtArgs>
        fields: Prisma.FlashCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlashCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlashCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          findFirst: {
            args: Prisma.FlashCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlashCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          findMany: {
            args: Prisma.FlashCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>[]
          }
          create: {
            args: Prisma.FlashCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          createMany: {
            args: Prisma.FlashCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlashCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>[]
          }
          delete: {
            args: Prisma.FlashCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          update: {
            args: Prisma.FlashCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          deleteMany: {
            args: Prisma.FlashCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlashCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlashCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>[]
          }
          upsert: {
            args: Prisma.FlashCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          aggregate: {
            args: Prisma.FlashCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlashCard>
          }
          groupBy: {
            args: Prisma.FlashCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlashCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlashCardCountArgs<ExtArgs>
            result: $Utils.Optional<FlashCardCountAggregateOutputType> | number
          }
        }
      }
      FlashCardProgress: {
        payload: Prisma.$FlashCardProgressPayload<ExtArgs>
        fields: Prisma.FlashCardProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlashCardProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlashCardProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardProgressPayload>
          }
          findFirst: {
            args: Prisma.FlashCardProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlashCardProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardProgressPayload>
          }
          findMany: {
            args: Prisma.FlashCardProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardProgressPayload>[]
          }
          create: {
            args: Prisma.FlashCardProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardProgressPayload>
          }
          createMany: {
            args: Prisma.FlashCardProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlashCardProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardProgressPayload>[]
          }
          delete: {
            args: Prisma.FlashCardProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardProgressPayload>
          }
          update: {
            args: Prisma.FlashCardProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardProgressPayload>
          }
          deleteMany: {
            args: Prisma.FlashCardProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlashCardProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlashCardProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardProgressPayload>[]
          }
          upsert: {
            args: Prisma.FlashCardProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardProgressPayload>
          }
          aggregate: {
            args: Prisma.FlashCardProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlashCardProgress>
          }
          groupBy: {
            args: Prisma.FlashCardProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlashCardProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlashCardProgressCountArgs<ExtArgs>
            result: $Utils.Optional<FlashCardProgressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    flashCard?: FlashCardOmit
    flashCardProgress?: FlashCardProgressOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model FlashCard
   */

  export type AggregateFlashCard = {
    _count: FlashCardCountAggregateOutputType | null
    _avg: FlashCardAvgAggregateOutputType | null
    _sum: FlashCardSumAggregateOutputType | null
    _min: FlashCardMinAggregateOutputType | null
    _max: FlashCardMaxAggregateOutputType | null
  }

  export type FlashCardAvgAggregateOutputType = {
    id: number | null
  }

  export type FlashCardSumAggregateOutputType = {
    id: number | null
  }

  export type FlashCardMinAggregateOutputType = {
    id: number | null
    term: string | null
    definition: string | null
    createdAt: Date | null
  }

  export type FlashCardMaxAggregateOutputType = {
    id: number | null
    term: string | null
    definition: string | null
    createdAt: Date | null
  }

  export type FlashCardCountAggregateOutputType = {
    id: number
    term: number
    definition: number
    createdAt: number
    _all: number
  }


  export type FlashCardAvgAggregateInputType = {
    id?: true
  }

  export type FlashCardSumAggregateInputType = {
    id?: true
  }

  export type FlashCardMinAggregateInputType = {
    id?: true
    term?: true
    definition?: true
    createdAt?: true
  }

  export type FlashCardMaxAggregateInputType = {
    id?: true
    term?: true
    definition?: true
    createdAt?: true
  }

  export type FlashCardCountAggregateInputType = {
    id?: true
    term?: true
    definition?: true
    createdAt?: true
    _all?: true
  }

  export type FlashCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashCard to aggregate.
     */
    where?: FlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlashCards
    **/
    _count?: true | FlashCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlashCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlashCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlashCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlashCardMaxAggregateInputType
  }

  export type GetFlashCardAggregateType<T extends FlashCardAggregateArgs> = {
        [P in keyof T & keyof AggregateFlashCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlashCard[P]>
      : GetScalarType<T[P], AggregateFlashCard[P]>
  }




  export type FlashCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashCardWhereInput
    orderBy?: FlashCardOrderByWithAggregationInput | FlashCardOrderByWithAggregationInput[]
    by: FlashCardScalarFieldEnum[] | FlashCardScalarFieldEnum
    having?: FlashCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlashCardCountAggregateInputType | true
    _avg?: FlashCardAvgAggregateInputType
    _sum?: FlashCardSumAggregateInputType
    _min?: FlashCardMinAggregateInputType
    _max?: FlashCardMaxAggregateInputType
  }

  export type FlashCardGroupByOutputType = {
    id: number
    term: string
    definition: string
    createdAt: Date
    _count: FlashCardCountAggregateOutputType | null
    _avg: FlashCardAvgAggregateOutputType | null
    _sum: FlashCardSumAggregateOutputType | null
    _min: FlashCardMinAggregateOutputType | null
    _max: FlashCardMaxAggregateOutputType | null
  }

  type GetFlashCardGroupByPayload<T extends FlashCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlashCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlashCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlashCardGroupByOutputType[P]>
            : GetScalarType<T[P], FlashCardGroupByOutputType[P]>
        }
      >
    >


  export type FlashCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    definition?: boolean
    createdAt?: boolean
    progress?: boolean | FlashCard$progressArgs<ExtArgs>
  }, ExtArgs["result"]["flashCard"]>

  export type FlashCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    definition?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["flashCard"]>

  export type FlashCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    definition?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["flashCard"]>

  export type FlashCardSelectScalar = {
    id?: boolean
    term?: boolean
    definition?: boolean
    createdAt?: boolean
  }

  export type FlashCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "term" | "definition" | "createdAt", ExtArgs["result"]["flashCard"]>
  export type FlashCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | FlashCard$progressArgs<ExtArgs>
  }
  export type FlashCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FlashCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FlashCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlashCard"
    objects: {
      progress: Prisma.$FlashCardProgressPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      term: string
      definition: string
      createdAt: Date
    }, ExtArgs["result"]["flashCard"]>
    composites: {}
  }

  type FlashCardGetPayload<S extends boolean | null | undefined | FlashCardDefaultArgs> = $Result.GetResult<Prisma.$FlashCardPayload, S>

  type FlashCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlashCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlashCardCountAggregateInputType | true
    }

  export interface FlashCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlashCard'], meta: { name: 'FlashCard' } }
    /**
     * Find zero or one FlashCard that matches the filter.
     * @param {FlashCardFindUniqueArgs} args - Arguments to find a FlashCard
     * @example
     * // Get one FlashCard
     * const flashCard = await prisma.flashCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlashCardFindUniqueArgs>(args: SelectSubset<T, FlashCardFindUniqueArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlashCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlashCardFindUniqueOrThrowArgs} args - Arguments to find a FlashCard
     * @example
     * // Get one FlashCard
     * const flashCard = await prisma.flashCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlashCardFindUniqueOrThrowArgs>(args: SelectSubset<T, FlashCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardFindFirstArgs} args - Arguments to find a FlashCard
     * @example
     * // Get one FlashCard
     * const flashCard = await prisma.flashCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlashCardFindFirstArgs>(args?: SelectSubset<T, FlashCardFindFirstArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardFindFirstOrThrowArgs} args - Arguments to find a FlashCard
     * @example
     * // Get one FlashCard
     * const flashCard = await prisma.flashCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlashCardFindFirstOrThrowArgs>(args?: SelectSubset<T, FlashCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlashCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlashCards
     * const flashCards = await prisma.flashCard.findMany()
     * 
     * // Get first 10 FlashCards
     * const flashCards = await prisma.flashCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flashCardWithIdOnly = await prisma.flashCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlashCardFindManyArgs>(args?: SelectSubset<T, FlashCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlashCard.
     * @param {FlashCardCreateArgs} args - Arguments to create a FlashCard.
     * @example
     * // Create one FlashCard
     * const FlashCard = await prisma.flashCard.create({
     *   data: {
     *     // ... data to create a FlashCard
     *   }
     * })
     * 
     */
    create<T extends FlashCardCreateArgs>(args: SelectSubset<T, FlashCardCreateArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlashCards.
     * @param {FlashCardCreateManyArgs} args - Arguments to create many FlashCards.
     * @example
     * // Create many FlashCards
     * const flashCard = await prisma.flashCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlashCardCreateManyArgs>(args?: SelectSubset<T, FlashCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlashCards and returns the data saved in the database.
     * @param {FlashCardCreateManyAndReturnArgs} args - Arguments to create many FlashCards.
     * @example
     * // Create many FlashCards
     * const flashCard = await prisma.flashCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlashCards and only return the `id`
     * const flashCardWithIdOnly = await prisma.flashCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlashCardCreateManyAndReturnArgs>(args?: SelectSubset<T, FlashCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlashCard.
     * @param {FlashCardDeleteArgs} args - Arguments to delete one FlashCard.
     * @example
     * // Delete one FlashCard
     * const FlashCard = await prisma.flashCard.delete({
     *   where: {
     *     // ... filter to delete one FlashCard
     *   }
     * })
     * 
     */
    delete<T extends FlashCardDeleteArgs>(args: SelectSubset<T, FlashCardDeleteArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlashCard.
     * @param {FlashCardUpdateArgs} args - Arguments to update one FlashCard.
     * @example
     * // Update one FlashCard
     * const flashCard = await prisma.flashCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlashCardUpdateArgs>(args: SelectSubset<T, FlashCardUpdateArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlashCards.
     * @param {FlashCardDeleteManyArgs} args - Arguments to filter FlashCards to delete.
     * @example
     * // Delete a few FlashCards
     * const { count } = await prisma.flashCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlashCardDeleteManyArgs>(args?: SelectSubset<T, FlashCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlashCards
     * const flashCard = await prisma.flashCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlashCardUpdateManyArgs>(args: SelectSubset<T, FlashCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashCards and returns the data updated in the database.
     * @param {FlashCardUpdateManyAndReturnArgs} args - Arguments to update many FlashCards.
     * @example
     * // Update many FlashCards
     * const flashCard = await prisma.flashCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlashCards and only return the `id`
     * const flashCardWithIdOnly = await prisma.flashCard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlashCardUpdateManyAndReturnArgs>(args: SelectSubset<T, FlashCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlashCard.
     * @param {FlashCardUpsertArgs} args - Arguments to update or create a FlashCard.
     * @example
     * // Update or create a FlashCard
     * const flashCard = await prisma.flashCard.upsert({
     *   create: {
     *     // ... data to create a FlashCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlashCard we want to update
     *   }
     * })
     */
    upsert<T extends FlashCardUpsertArgs>(args: SelectSubset<T, FlashCardUpsertArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlashCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardCountArgs} args - Arguments to filter FlashCards to count.
     * @example
     * // Count the number of FlashCards
     * const count = await prisma.flashCard.count({
     *   where: {
     *     // ... the filter for the FlashCards we want to count
     *   }
     * })
    **/
    count<T extends FlashCardCountArgs>(
      args?: Subset<T, FlashCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlashCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlashCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlashCardAggregateArgs>(args: Subset<T, FlashCardAggregateArgs>): Prisma.PrismaPromise<GetFlashCardAggregateType<T>>

    /**
     * Group by FlashCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlashCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlashCardGroupByArgs['orderBy'] }
        : { orderBy?: FlashCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlashCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlashCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlashCard model
   */
  readonly fields: FlashCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlashCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlashCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    progress<T extends FlashCard$progressArgs<ExtArgs> = {}>(args?: Subset<T, FlashCard$progressArgs<ExtArgs>>): Prisma__FlashCardProgressClient<$Result.GetResult<Prisma.$FlashCardProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlashCard model
   */
  interface FlashCardFieldRefs {
    readonly id: FieldRef<"FlashCard", 'Int'>
    readonly term: FieldRef<"FlashCard", 'String'>
    readonly definition: FieldRef<"FlashCard", 'String'>
    readonly createdAt: FieldRef<"FlashCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FlashCard findUnique
   */
  export type FlashCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCard to fetch.
     */
    where: FlashCardWhereUniqueInput
  }

  /**
   * FlashCard findUniqueOrThrow
   */
  export type FlashCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCard to fetch.
     */
    where: FlashCardWhereUniqueInput
  }

  /**
   * FlashCard findFirst
   */
  export type FlashCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCard to fetch.
     */
    where?: FlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashCards.
     */
    cursor?: FlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashCards.
     */
    distinct?: FlashCardScalarFieldEnum | FlashCardScalarFieldEnum[]
  }

  /**
   * FlashCard findFirstOrThrow
   */
  export type FlashCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCard to fetch.
     */
    where?: FlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashCards.
     */
    cursor?: FlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashCards.
     */
    distinct?: FlashCardScalarFieldEnum | FlashCardScalarFieldEnum[]
  }

  /**
   * FlashCard findMany
   */
  export type FlashCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCards to fetch.
     */
    where?: FlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlashCards.
     */
    cursor?: FlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    distinct?: FlashCardScalarFieldEnum | FlashCardScalarFieldEnum[]
  }

  /**
   * FlashCard create
   */
  export type FlashCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * The data needed to create a FlashCard.
     */
    data: XOR<FlashCardCreateInput, FlashCardUncheckedCreateInput>
  }

  /**
   * FlashCard createMany
   */
  export type FlashCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlashCards.
     */
    data: FlashCardCreateManyInput | FlashCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlashCard createManyAndReturn
   */
  export type FlashCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * The data used to create many FlashCards.
     */
    data: FlashCardCreateManyInput | FlashCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlashCard update
   */
  export type FlashCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * The data needed to update a FlashCard.
     */
    data: XOR<FlashCardUpdateInput, FlashCardUncheckedUpdateInput>
    /**
     * Choose, which FlashCard to update.
     */
    where: FlashCardWhereUniqueInput
  }

  /**
   * FlashCard updateMany
   */
  export type FlashCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlashCards.
     */
    data: XOR<FlashCardUpdateManyMutationInput, FlashCardUncheckedUpdateManyInput>
    /**
     * Filter which FlashCards to update
     */
    where?: FlashCardWhereInput
    /**
     * Limit how many FlashCards to update.
     */
    limit?: number
  }

  /**
   * FlashCard updateManyAndReturn
   */
  export type FlashCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * The data used to update FlashCards.
     */
    data: XOR<FlashCardUpdateManyMutationInput, FlashCardUncheckedUpdateManyInput>
    /**
     * Filter which FlashCards to update
     */
    where?: FlashCardWhereInput
    /**
     * Limit how many FlashCards to update.
     */
    limit?: number
  }

  /**
   * FlashCard upsert
   */
  export type FlashCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * The filter to search for the FlashCard to update in case it exists.
     */
    where: FlashCardWhereUniqueInput
    /**
     * In case the FlashCard found by the `where` argument doesn't exist, create a new FlashCard with this data.
     */
    create: XOR<FlashCardCreateInput, FlashCardUncheckedCreateInput>
    /**
     * In case the FlashCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlashCardUpdateInput, FlashCardUncheckedUpdateInput>
  }

  /**
   * FlashCard delete
   */
  export type FlashCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter which FlashCard to delete.
     */
    where: FlashCardWhereUniqueInput
  }

  /**
   * FlashCard deleteMany
   */
  export type FlashCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashCards to delete
     */
    where?: FlashCardWhereInput
    /**
     * Limit how many FlashCards to delete.
     */
    limit?: number
  }

  /**
   * FlashCard.progress
   */
  export type FlashCard$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardProgress
     */
    select?: FlashCardProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardProgress
     */
    omit?: FlashCardProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardProgressInclude<ExtArgs> | null
    where?: FlashCardProgressWhereInput
  }

  /**
   * FlashCard without action
   */
  export type FlashCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
  }


  /**
   * Model FlashCardProgress
   */

  export type AggregateFlashCardProgress = {
    _count: FlashCardProgressCountAggregateOutputType | null
    _avg: FlashCardProgressAvgAggregateOutputType | null
    _sum: FlashCardProgressSumAggregateOutputType | null
    _min: FlashCardProgressMinAggregateOutputType | null
    _max: FlashCardProgressMaxAggregateOutputType | null
  }

  export type FlashCardProgressAvgAggregateOutputType = {
    id: number | null
    flashCardId: number | null
    correctCount: number | null
    incorrectCount: number | null
    streak: number | null
  }

  export type FlashCardProgressSumAggregateOutputType = {
    id: number | null
    flashCardId: number | null
    correctCount: number | null
    incorrectCount: number | null
    streak: number | null
  }

  export type FlashCardProgressMinAggregateOutputType = {
    id: number | null
    flashCardId: number | null
    correctCount: number | null
    incorrectCount: number | null
    streak: number | null
    mastered: boolean | null
  }

  export type FlashCardProgressMaxAggregateOutputType = {
    id: number | null
    flashCardId: number | null
    correctCount: number | null
    incorrectCount: number | null
    streak: number | null
    mastered: boolean | null
  }

  export type FlashCardProgressCountAggregateOutputType = {
    id: number
    flashCardId: number
    correctCount: number
    incorrectCount: number
    streak: number
    mastered: number
    _all: number
  }


  export type FlashCardProgressAvgAggregateInputType = {
    id?: true
    flashCardId?: true
    correctCount?: true
    incorrectCount?: true
    streak?: true
  }

  export type FlashCardProgressSumAggregateInputType = {
    id?: true
    flashCardId?: true
    correctCount?: true
    incorrectCount?: true
    streak?: true
  }

  export type FlashCardProgressMinAggregateInputType = {
    id?: true
    flashCardId?: true
    correctCount?: true
    incorrectCount?: true
    streak?: true
    mastered?: true
  }

  export type FlashCardProgressMaxAggregateInputType = {
    id?: true
    flashCardId?: true
    correctCount?: true
    incorrectCount?: true
    streak?: true
    mastered?: true
  }

  export type FlashCardProgressCountAggregateInputType = {
    id?: true
    flashCardId?: true
    correctCount?: true
    incorrectCount?: true
    streak?: true
    mastered?: true
    _all?: true
  }

  export type FlashCardProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashCardProgress to aggregate.
     */
    where?: FlashCardProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCardProgresses to fetch.
     */
    orderBy?: FlashCardProgressOrderByWithRelationInput | FlashCardProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlashCardProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCardProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCardProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlashCardProgresses
    **/
    _count?: true | FlashCardProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlashCardProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlashCardProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlashCardProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlashCardProgressMaxAggregateInputType
  }

  export type GetFlashCardProgressAggregateType<T extends FlashCardProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateFlashCardProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlashCardProgress[P]>
      : GetScalarType<T[P], AggregateFlashCardProgress[P]>
  }




  export type FlashCardProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashCardProgressWhereInput
    orderBy?: FlashCardProgressOrderByWithAggregationInput | FlashCardProgressOrderByWithAggregationInput[]
    by: FlashCardProgressScalarFieldEnum[] | FlashCardProgressScalarFieldEnum
    having?: FlashCardProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlashCardProgressCountAggregateInputType | true
    _avg?: FlashCardProgressAvgAggregateInputType
    _sum?: FlashCardProgressSumAggregateInputType
    _min?: FlashCardProgressMinAggregateInputType
    _max?: FlashCardProgressMaxAggregateInputType
  }

  export type FlashCardProgressGroupByOutputType = {
    id: number
    flashCardId: number
    correctCount: number
    incorrectCount: number
    streak: number
    mastered: boolean
    _count: FlashCardProgressCountAggregateOutputType | null
    _avg: FlashCardProgressAvgAggregateOutputType | null
    _sum: FlashCardProgressSumAggregateOutputType | null
    _min: FlashCardProgressMinAggregateOutputType | null
    _max: FlashCardProgressMaxAggregateOutputType | null
  }

  type GetFlashCardProgressGroupByPayload<T extends FlashCardProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlashCardProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlashCardProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlashCardProgressGroupByOutputType[P]>
            : GetScalarType<T[P], FlashCardProgressGroupByOutputType[P]>
        }
      >
    >


  export type FlashCardProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flashCardId?: boolean
    correctCount?: boolean
    incorrectCount?: boolean
    streak?: boolean
    mastered?: boolean
    flashCard?: boolean | FlashCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashCardProgress"]>

  export type FlashCardProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flashCardId?: boolean
    correctCount?: boolean
    incorrectCount?: boolean
    streak?: boolean
    mastered?: boolean
    flashCard?: boolean | FlashCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashCardProgress"]>

  export type FlashCardProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flashCardId?: boolean
    correctCount?: boolean
    incorrectCount?: boolean
    streak?: boolean
    mastered?: boolean
    flashCard?: boolean | FlashCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashCardProgress"]>

  export type FlashCardProgressSelectScalar = {
    id?: boolean
    flashCardId?: boolean
    correctCount?: boolean
    incorrectCount?: boolean
    streak?: boolean
    mastered?: boolean
  }

  export type FlashCardProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "flashCardId" | "correctCount" | "incorrectCount" | "streak" | "mastered", ExtArgs["result"]["flashCardProgress"]>
  export type FlashCardProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flashCard?: boolean | FlashCardDefaultArgs<ExtArgs>
  }
  export type FlashCardProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flashCard?: boolean | FlashCardDefaultArgs<ExtArgs>
  }
  export type FlashCardProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flashCard?: boolean | FlashCardDefaultArgs<ExtArgs>
  }

  export type $FlashCardProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlashCardProgress"
    objects: {
      flashCard: Prisma.$FlashCardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      flashCardId: number
      correctCount: number
      incorrectCount: number
      streak: number
      mastered: boolean
    }, ExtArgs["result"]["flashCardProgress"]>
    composites: {}
  }

  type FlashCardProgressGetPayload<S extends boolean | null | undefined | FlashCardProgressDefaultArgs> = $Result.GetResult<Prisma.$FlashCardProgressPayload, S>

  type FlashCardProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlashCardProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlashCardProgressCountAggregateInputType | true
    }

  export interface FlashCardProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlashCardProgress'], meta: { name: 'FlashCardProgress' } }
    /**
     * Find zero or one FlashCardProgress that matches the filter.
     * @param {FlashCardProgressFindUniqueArgs} args - Arguments to find a FlashCardProgress
     * @example
     * // Get one FlashCardProgress
     * const flashCardProgress = await prisma.flashCardProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlashCardProgressFindUniqueArgs>(args: SelectSubset<T, FlashCardProgressFindUniqueArgs<ExtArgs>>): Prisma__FlashCardProgressClient<$Result.GetResult<Prisma.$FlashCardProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlashCardProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlashCardProgressFindUniqueOrThrowArgs} args - Arguments to find a FlashCardProgress
     * @example
     * // Get one FlashCardProgress
     * const flashCardProgress = await prisma.flashCardProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlashCardProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, FlashCardProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlashCardProgressClient<$Result.GetResult<Prisma.$FlashCardProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashCardProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardProgressFindFirstArgs} args - Arguments to find a FlashCardProgress
     * @example
     * // Get one FlashCardProgress
     * const flashCardProgress = await prisma.flashCardProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlashCardProgressFindFirstArgs>(args?: SelectSubset<T, FlashCardProgressFindFirstArgs<ExtArgs>>): Prisma__FlashCardProgressClient<$Result.GetResult<Prisma.$FlashCardProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashCardProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardProgressFindFirstOrThrowArgs} args - Arguments to find a FlashCardProgress
     * @example
     * // Get one FlashCardProgress
     * const flashCardProgress = await prisma.flashCardProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlashCardProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, FlashCardProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlashCardProgressClient<$Result.GetResult<Prisma.$FlashCardProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlashCardProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlashCardProgresses
     * const flashCardProgresses = await prisma.flashCardProgress.findMany()
     * 
     * // Get first 10 FlashCardProgresses
     * const flashCardProgresses = await prisma.flashCardProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flashCardProgressWithIdOnly = await prisma.flashCardProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlashCardProgressFindManyArgs>(args?: SelectSubset<T, FlashCardProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlashCardProgress.
     * @param {FlashCardProgressCreateArgs} args - Arguments to create a FlashCardProgress.
     * @example
     * // Create one FlashCardProgress
     * const FlashCardProgress = await prisma.flashCardProgress.create({
     *   data: {
     *     // ... data to create a FlashCardProgress
     *   }
     * })
     * 
     */
    create<T extends FlashCardProgressCreateArgs>(args: SelectSubset<T, FlashCardProgressCreateArgs<ExtArgs>>): Prisma__FlashCardProgressClient<$Result.GetResult<Prisma.$FlashCardProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlashCardProgresses.
     * @param {FlashCardProgressCreateManyArgs} args - Arguments to create many FlashCardProgresses.
     * @example
     * // Create many FlashCardProgresses
     * const flashCardProgress = await prisma.flashCardProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlashCardProgressCreateManyArgs>(args?: SelectSubset<T, FlashCardProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlashCardProgresses and returns the data saved in the database.
     * @param {FlashCardProgressCreateManyAndReturnArgs} args - Arguments to create many FlashCardProgresses.
     * @example
     * // Create many FlashCardProgresses
     * const flashCardProgress = await prisma.flashCardProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlashCardProgresses and only return the `id`
     * const flashCardProgressWithIdOnly = await prisma.flashCardProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlashCardProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, FlashCardProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlashCardProgress.
     * @param {FlashCardProgressDeleteArgs} args - Arguments to delete one FlashCardProgress.
     * @example
     * // Delete one FlashCardProgress
     * const FlashCardProgress = await prisma.flashCardProgress.delete({
     *   where: {
     *     // ... filter to delete one FlashCardProgress
     *   }
     * })
     * 
     */
    delete<T extends FlashCardProgressDeleteArgs>(args: SelectSubset<T, FlashCardProgressDeleteArgs<ExtArgs>>): Prisma__FlashCardProgressClient<$Result.GetResult<Prisma.$FlashCardProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlashCardProgress.
     * @param {FlashCardProgressUpdateArgs} args - Arguments to update one FlashCardProgress.
     * @example
     * // Update one FlashCardProgress
     * const flashCardProgress = await prisma.flashCardProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlashCardProgressUpdateArgs>(args: SelectSubset<T, FlashCardProgressUpdateArgs<ExtArgs>>): Prisma__FlashCardProgressClient<$Result.GetResult<Prisma.$FlashCardProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlashCardProgresses.
     * @param {FlashCardProgressDeleteManyArgs} args - Arguments to filter FlashCardProgresses to delete.
     * @example
     * // Delete a few FlashCardProgresses
     * const { count } = await prisma.flashCardProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlashCardProgressDeleteManyArgs>(args?: SelectSubset<T, FlashCardProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashCardProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlashCardProgresses
     * const flashCardProgress = await prisma.flashCardProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlashCardProgressUpdateManyArgs>(args: SelectSubset<T, FlashCardProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashCardProgresses and returns the data updated in the database.
     * @param {FlashCardProgressUpdateManyAndReturnArgs} args - Arguments to update many FlashCardProgresses.
     * @example
     * // Update many FlashCardProgresses
     * const flashCardProgress = await prisma.flashCardProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlashCardProgresses and only return the `id`
     * const flashCardProgressWithIdOnly = await prisma.flashCardProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlashCardProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, FlashCardProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlashCardProgress.
     * @param {FlashCardProgressUpsertArgs} args - Arguments to update or create a FlashCardProgress.
     * @example
     * // Update or create a FlashCardProgress
     * const flashCardProgress = await prisma.flashCardProgress.upsert({
     *   create: {
     *     // ... data to create a FlashCardProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlashCardProgress we want to update
     *   }
     * })
     */
    upsert<T extends FlashCardProgressUpsertArgs>(args: SelectSubset<T, FlashCardProgressUpsertArgs<ExtArgs>>): Prisma__FlashCardProgressClient<$Result.GetResult<Prisma.$FlashCardProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlashCardProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardProgressCountArgs} args - Arguments to filter FlashCardProgresses to count.
     * @example
     * // Count the number of FlashCardProgresses
     * const count = await prisma.flashCardProgress.count({
     *   where: {
     *     // ... the filter for the FlashCardProgresses we want to count
     *   }
     * })
    **/
    count<T extends FlashCardProgressCountArgs>(
      args?: Subset<T, FlashCardProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlashCardProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlashCardProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlashCardProgressAggregateArgs>(args: Subset<T, FlashCardProgressAggregateArgs>): Prisma.PrismaPromise<GetFlashCardProgressAggregateType<T>>

    /**
     * Group by FlashCardProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlashCardProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlashCardProgressGroupByArgs['orderBy'] }
        : { orderBy?: FlashCardProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlashCardProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlashCardProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlashCardProgress model
   */
  readonly fields: FlashCardProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlashCardProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlashCardProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flashCard<T extends FlashCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlashCardDefaultArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlashCardProgress model
   */
  interface FlashCardProgressFieldRefs {
    readonly id: FieldRef<"FlashCardProgress", 'Int'>
    readonly flashCardId: FieldRef<"FlashCardProgress", 'Int'>
    readonly correctCount: FieldRef<"FlashCardProgress", 'Int'>
    readonly incorrectCount: FieldRef<"FlashCardProgress", 'Int'>
    readonly streak: FieldRef<"FlashCardProgress", 'Int'>
    readonly mastered: FieldRef<"FlashCardProgress", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * FlashCardProgress findUnique
   */
  export type FlashCardProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardProgress
     */
    select?: FlashCardProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardProgress
     */
    omit?: FlashCardProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardProgressInclude<ExtArgs> | null
    /**
     * Filter, which FlashCardProgress to fetch.
     */
    where: FlashCardProgressWhereUniqueInput
  }

  /**
   * FlashCardProgress findUniqueOrThrow
   */
  export type FlashCardProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardProgress
     */
    select?: FlashCardProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardProgress
     */
    omit?: FlashCardProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardProgressInclude<ExtArgs> | null
    /**
     * Filter, which FlashCardProgress to fetch.
     */
    where: FlashCardProgressWhereUniqueInput
  }

  /**
   * FlashCardProgress findFirst
   */
  export type FlashCardProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardProgress
     */
    select?: FlashCardProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardProgress
     */
    omit?: FlashCardProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardProgressInclude<ExtArgs> | null
    /**
     * Filter, which FlashCardProgress to fetch.
     */
    where?: FlashCardProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCardProgresses to fetch.
     */
    orderBy?: FlashCardProgressOrderByWithRelationInput | FlashCardProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashCardProgresses.
     */
    cursor?: FlashCardProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCardProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCardProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashCardProgresses.
     */
    distinct?: FlashCardProgressScalarFieldEnum | FlashCardProgressScalarFieldEnum[]
  }

  /**
   * FlashCardProgress findFirstOrThrow
   */
  export type FlashCardProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardProgress
     */
    select?: FlashCardProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardProgress
     */
    omit?: FlashCardProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardProgressInclude<ExtArgs> | null
    /**
     * Filter, which FlashCardProgress to fetch.
     */
    where?: FlashCardProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCardProgresses to fetch.
     */
    orderBy?: FlashCardProgressOrderByWithRelationInput | FlashCardProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashCardProgresses.
     */
    cursor?: FlashCardProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCardProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCardProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashCardProgresses.
     */
    distinct?: FlashCardProgressScalarFieldEnum | FlashCardProgressScalarFieldEnum[]
  }

  /**
   * FlashCardProgress findMany
   */
  export type FlashCardProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardProgress
     */
    select?: FlashCardProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardProgress
     */
    omit?: FlashCardProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardProgressInclude<ExtArgs> | null
    /**
     * Filter, which FlashCardProgresses to fetch.
     */
    where?: FlashCardProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCardProgresses to fetch.
     */
    orderBy?: FlashCardProgressOrderByWithRelationInput | FlashCardProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlashCardProgresses.
     */
    cursor?: FlashCardProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCardProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCardProgresses.
     */
    skip?: number
    distinct?: FlashCardProgressScalarFieldEnum | FlashCardProgressScalarFieldEnum[]
  }

  /**
   * FlashCardProgress create
   */
  export type FlashCardProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardProgress
     */
    select?: FlashCardProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardProgress
     */
    omit?: FlashCardProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a FlashCardProgress.
     */
    data: XOR<FlashCardProgressCreateInput, FlashCardProgressUncheckedCreateInput>
  }

  /**
   * FlashCardProgress createMany
   */
  export type FlashCardProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlashCardProgresses.
     */
    data: FlashCardProgressCreateManyInput | FlashCardProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlashCardProgress createManyAndReturn
   */
  export type FlashCardProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardProgress
     */
    select?: FlashCardProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardProgress
     */
    omit?: FlashCardProgressOmit<ExtArgs> | null
    /**
     * The data used to create many FlashCardProgresses.
     */
    data: FlashCardProgressCreateManyInput | FlashCardProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlashCardProgress update
   */
  export type FlashCardProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardProgress
     */
    select?: FlashCardProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardProgress
     */
    omit?: FlashCardProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a FlashCardProgress.
     */
    data: XOR<FlashCardProgressUpdateInput, FlashCardProgressUncheckedUpdateInput>
    /**
     * Choose, which FlashCardProgress to update.
     */
    where: FlashCardProgressWhereUniqueInput
  }

  /**
   * FlashCardProgress updateMany
   */
  export type FlashCardProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlashCardProgresses.
     */
    data: XOR<FlashCardProgressUpdateManyMutationInput, FlashCardProgressUncheckedUpdateManyInput>
    /**
     * Filter which FlashCardProgresses to update
     */
    where?: FlashCardProgressWhereInput
    /**
     * Limit how many FlashCardProgresses to update.
     */
    limit?: number
  }

  /**
   * FlashCardProgress updateManyAndReturn
   */
  export type FlashCardProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardProgress
     */
    select?: FlashCardProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardProgress
     */
    omit?: FlashCardProgressOmit<ExtArgs> | null
    /**
     * The data used to update FlashCardProgresses.
     */
    data: XOR<FlashCardProgressUpdateManyMutationInput, FlashCardProgressUncheckedUpdateManyInput>
    /**
     * Filter which FlashCardProgresses to update
     */
    where?: FlashCardProgressWhereInput
    /**
     * Limit how many FlashCardProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlashCardProgress upsert
   */
  export type FlashCardProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardProgress
     */
    select?: FlashCardProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardProgress
     */
    omit?: FlashCardProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the FlashCardProgress to update in case it exists.
     */
    where: FlashCardProgressWhereUniqueInput
    /**
     * In case the FlashCardProgress found by the `where` argument doesn't exist, create a new FlashCardProgress with this data.
     */
    create: XOR<FlashCardProgressCreateInput, FlashCardProgressUncheckedCreateInput>
    /**
     * In case the FlashCardProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlashCardProgressUpdateInput, FlashCardProgressUncheckedUpdateInput>
  }

  /**
   * FlashCardProgress delete
   */
  export type FlashCardProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardProgress
     */
    select?: FlashCardProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardProgress
     */
    omit?: FlashCardProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardProgressInclude<ExtArgs> | null
    /**
     * Filter which FlashCardProgress to delete.
     */
    where: FlashCardProgressWhereUniqueInput
  }

  /**
   * FlashCardProgress deleteMany
   */
  export type FlashCardProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashCardProgresses to delete
     */
    where?: FlashCardProgressWhereInput
    /**
     * Limit how many FlashCardProgresses to delete.
     */
    limit?: number
  }

  /**
   * FlashCardProgress without action
   */
  export type FlashCardProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardProgress
     */
    select?: FlashCardProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardProgress
     */
    omit?: FlashCardProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardProgressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FlashCardScalarFieldEnum: {
    id: 'id',
    term: 'term',
    definition: 'definition',
    createdAt: 'createdAt'
  };

  export type FlashCardScalarFieldEnum = (typeof FlashCardScalarFieldEnum)[keyof typeof FlashCardScalarFieldEnum]


  export const FlashCardProgressScalarFieldEnum: {
    id: 'id',
    flashCardId: 'flashCardId',
    correctCount: 'correctCount',
    incorrectCount: 'incorrectCount',
    streak: 'streak',
    mastered: 'mastered'
  };

  export type FlashCardProgressScalarFieldEnum = (typeof FlashCardProgressScalarFieldEnum)[keyof typeof FlashCardProgressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FlashCardWhereInput = {
    AND?: FlashCardWhereInput | FlashCardWhereInput[]
    OR?: FlashCardWhereInput[]
    NOT?: FlashCardWhereInput | FlashCardWhereInput[]
    id?: IntFilter<"FlashCard"> | number
    term?: StringFilter<"FlashCard"> | string
    definition?: StringFilter<"FlashCard"> | string
    createdAt?: DateTimeFilter<"FlashCard"> | Date | string
    progress?: XOR<FlashCardProgressNullableScalarRelationFilter, FlashCardProgressWhereInput> | null
  }

  export type FlashCardOrderByWithRelationInput = {
    id?: SortOrder
    term?: SortOrder
    definition?: SortOrder
    createdAt?: SortOrder
    progress?: FlashCardProgressOrderByWithRelationInput
  }

  export type FlashCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FlashCardWhereInput | FlashCardWhereInput[]
    OR?: FlashCardWhereInput[]
    NOT?: FlashCardWhereInput | FlashCardWhereInput[]
    term?: StringFilter<"FlashCard"> | string
    definition?: StringFilter<"FlashCard"> | string
    createdAt?: DateTimeFilter<"FlashCard"> | Date | string
    progress?: XOR<FlashCardProgressNullableScalarRelationFilter, FlashCardProgressWhereInput> | null
  }, "id">

  export type FlashCardOrderByWithAggregationInput = {
    id?: SortOrder
    term?: SortOrder
    definition?: SortOrder
    createdAt?: SortOrder
    _count?: FlashCardCountOrderByAggregateInput
    _avg?: FlashCardAvgOrderByAggregateInput
    _max?: FlashCardMaxOrderByAggregateInput
    _min?: FlashCardMinOrderByAggregateInput
    _sum?: FlashCardSumOrderByAggregateInput
  }

  export type FlashCardScalarWhereWithAggregatesInput = {
    AND?: FlashCardScalarWhereWithAggregatesInput | FlashCardScalarWhereWithAggregatesInput[]
    OR?: FlashCardScalarWhereWithAggregatesInput[]
    NOT?: FlashCardScalarWhereWithAggregatesInput | FlashCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FlashCard"> | number
    term?: StringWithAggregatesFilter<"FlashCard"> | string
    definition?: StringWithAggregatesFilter<"FlashCard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FlashCard"> | Date | string
  }

  export type FlashCardProgressWhereInput = {
    AND?: FlashCardProgressWhereInput | FlashCardProgressWhereInput[]
    OR?: FlashCardProgressWhereInput[]
    NOT?: FlashCardProgressWhereInput | FlashCardProgressWhereInput[]
    id?: IntFilter<"FlashCardProgress"> | number
    flashCardId?: IntFilter<"FlashCardProgress"> | number
    correctCount?: IntFilter<"FlashCardProgress"> | number
    incorrectCount?: IntFilter<"FlashCardProgress"> | number
    streak?: IntFilter<"FlashCardProgress"> | number
    mastered?: BoolFilter<"FlashCardProgress"> | boolean
    flashCard?: XOR<FlashCardScalarRelationFilter, FlashCardWhereInput>
  }

  export type FlashCardProgressOrderByWithRelationInput = {
    id?: SortOrder
    flashCardId?: SortOrder
    correctCount?: SortOrder
    incorrectCount?: SortOrder
    streak?: SortOrder
    mastered?: SortOrder
    flashCard?: FlashCardOrderByWithRelationInput
  }

  export type FlashCardProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    flashCardId?: number
    AND?: FlashCardProgressWhereInput | FlashCardProgressWhereInput[]
    OR?: FlashCardProgressWhereInput[]
    NOT?: FlashCardProgressWhereInput | FlashCardProgressWhereInput[]
    correctCount?: IntFilter<"FlashCardProgress"> | number
    incorrectCount?: IntFilter<"FlashCardProgress"> | number
    streak?: IntFilter<"FlashCardProgress"> | number
    mastered?: BoolFilter<"FlashCardProgress"> | boolean
    flashCard?: XOR<FlashCardScalarRelationFilter, FlashCardWhereInput>
  }, "id" | "flashCardId">

  export type FlashCardProgressOrderByWithAggregationInput = {
    id?: SortOrder
    flashCardId?: SortOrder
    correctCount?: SortOrder
    incorrectCount?: SortOrder
    streak?: SortOrder
    mastered?: SortOrder
    _count?: FlashCardProgressCountOrderByAggregateInput
    _avg?: FlashCardProgressAvgOrderByAggregateInput
    _max?: FlashCardProgressMaxOrderByAggregateInput
    _min?: FlashCardProgressMinOrderByAggregateInput
    _sum?: FlashCardProgressSumOrderByAggregateInput
  }

  export type FlashCardProgressScalarWhereWithAggregatesInput = {
    AND?: FlashCardProgressScalarWhereWithAggregatesInput | FlashCardProgressScalarWhereWithAggregatesInput[]
    OR?: FlashCardProgressScalarWhereWithAggregatesInput[]
    NOT?: FlashCardProgressScalarWhereWithAggregatesInput | FlashCardProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FlashCardProgress"> | number
    flashCardId?: IntWithAggregatesFilter<"FlashCardProgress"> | number
    correctCount?: IntWithAggregatesFilter<"FlashCardProgress"> | number
    incorrectCount?: IntWithAggregatesFilter<"FlashCardProgress"> | number
    streak?: IntWithAggregatesFilter<"FlashCardProgress"> | number
    mastered?: BoolWithAggregatesFilter<"FlashCardProgress"> | boolean
  }

  export type FlashCardCreateInput = {
    term: string
    definition: string
    createdAt?: Date | string
    progress?: FlashCardProgressCreateNestedOneWithoutFlashCardInput
  }

  export type FlashCardUncheckedCreateInput = {
    id?: number
    term: string
    definition: string
    createdAt?: Date | string
    progress?: FlashCardProgressUncheckedCreateNestedOneWithoutFlashCardInput
  }

  export type FlashCardUpdateInput = {
    term?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FlashCardProgressUpdateOneWithoutFlashCardNestedInput
  }

  export type FlashCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FlashCardProgressUncheckedUpdateOneWithoutFlashCardNestedInput
  }

  export type FlashCardCreateManyInput = {
    id?: number
    term: string
    definition: string
    createdAt?: Date | string
  }

  export type FlashCardUpdateManyMutationInput = {
    term?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashCardProgressCreateInput = {
    correctCount?: number
    incorrectCount?: number
    streak?: number
    mastered?: boolean
    flashCard: FlashCardCreateNestedOneWithoutProgressInput
  }

  export type FlashCardProgressUncheckedCreateInput = {
    id?: number
    flashCardId: number
    correctCount?: number
    incorrectCount?: number
    streak?: number
    mastered?: boolean
  }

  export type FlashCardProgressUpdateInput = {
    correctCount?: IntFieldUpdateOperationsInput | number
    incorrectCount?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    mastered?: BoolFieldUpdateOperationsInput | boolean
    flashCard?: FlashCardUpdateOneRequiredWithoutProgressNestedInput
  }

  export type FlashCardProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    flashCardId?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    incorrectCount?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    mastered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FlashCardProgressCreateManyInput = {
    id?: number
    flashCardId: number
    correctCount?: number
    incorrectCount?: number
    streak?: number
    mastered?: boolean
  }

  export type FlashCardProgressUpdateManyMutationInput = {
    correctCount?: IntFieldUpdateOperationsInput | number
    incorrectCount?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    mastered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FlashCardProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    flashCardId?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    incorrectCount?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    mastered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FlashCardProgressNullableScalarRelationFilter = {
    is?: FlashCardProgressWhereInput | null
    isNot?: FlashCardProgressWhereInput | null
  }

  export type FlashCardCountOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    definition?: SortOrder
    createdAt?: SortOrder
  }

  export type FlashCardAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FlashCardMaxOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    definition?: SortOrder
    createdAt?: SortOrder
  }

  export type FlashCardMinOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    definition?: SortOrder
    createdAt?: SortOrder
  }

  export type FlashCardSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FlashCardScalarRelationFilter = {
    is?: FlashCardWhereInput
    isNot?: FlashCardWhereInput
  }

  export type FlashCardProgressCountOrderByAggregateInput = {
    id?: SortOrder
    flashCardId?: SortOrder
    correctCount?: SortOrder
    incorrectCount?: SortOrder
    streak?: SortOrder
    mastered?: SortOrder
  }

  export type FlashCardProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    flashCardId?: SortOrder
    correctCount?: SortOrder
    incorrectCount?: SortOrder
    streak?: SortOrder
  }

  export type FlashCardProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    flashCardId?: SortOrder
    correctCount?: SortOrder
    incorrectCount?: SortOrder
    streak?: SortOrder
    mastered?: SortOrder
  }

  export type FlashCardProgressMinOrderByAggregateInput = {
    id?: SortOrder
    flashCardId?: SortOrder
    correctCount?: SortOrder
    incorrectCount?: SortOrder
    streak?: SortOrder
    mastered?: SortOrder
  }

  export type FlashCardProgressSumOrderByAggregateInput = {
    id?: SortOrder
    flashCardId?: SortOrder
    correctCount?: SortOrder
    incorrectCount?: SortOrder
    streak?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FlashCardProgressCreateNestedOneWithoutFlashCardInput = {
    create?: XOR<FlashCardProgressCreateWithoutFlashCardInput, FlashCardProgressUncheckedCreateWithoutFlashCardInput>
    connectOrCreate?: FlashCardProgressCreateOrConnectWithoutFlashCardInput
    connect?: FlashCardProgressWhereUniqueInput
  }

  export type FlashCardProgressUncheckedCreateNestedOneWithoutFlashCardInput = {
    create?: XOR<FlashCardProgressCreateWithoutFlashCardInput, FlashCardProgressUncheckedCreateWithoutFlashCardInput>
    connectOrCreate?: FlashCardProgressCreateOrConnectWithoutFlashCardInput
    connect?: FlashCardProgressWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FlashCardProgressUpdateOneWithoutFlashCardNestedInput = {
    create?: XOR<FlashCardProgressCreateWithoutFlashCardInput, FlashCardProgressUncheckedCreateWithoutFlashCardInput>
    connectOrCreate?: FlashCardProgressCreateOrConnectWithoutFlashCardInput
    upsert?: FlashCardProgressUpsertWithoutFlashCardInput
    disconnect?: FlashCardProgressWhereInput | boolean
    delete?: FlashCardProgressWhereInput | boolean
    connect?: FlashCardProgressWhereUniqueInput
    update?: XOR<XOR<FlashCardProgressUpdateToOneWithWhereWithoutFlashCardInput, FlashCardProgressUpdateWithoutFlashCardInput>, FlashCardProgressUncheckedUpdateWithoutFlashCardInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FlashCardProgressUncheckedUpdateOneWithoutFlashCardNestedInput = {
    create?: XOR<FlashCardProgressCreateWithoutFlashCardInput, FlashCardProgressUncheckedCreateWithoutFlashCardInput>
    connectOrCreate?: FlashCardProgressCreateOrConnectWithoutFlashCardInput
    upsert?: FlashCardProgressUpsertWithoutFlashCardInput
    disconnect?: FlashCardProgressWhereInput | boolean
    delete?: FlashCardProgressWhereInput | boolean
    connect?: FlashCardProgressWhereUniqueInput
    update?: XOR<XOR<FlashCardProgressUpdateToOneWithWhereWithoutFlashCardInput, FlashCardProgressUpdateWithoutFlashCardInput>, FlashCardProgressUncheckedUpdateWithoutFlashCardInput>
  }

  export type FlashCardCreateNestedOneWithoutProgressInput = {
    create?: XOR<FlashCardCreateWithoutProgressInput, FlashCardUncheckedCreateWithoutProgressInput>
    connectOrCreate?: FlashCardCreateOrConnectWithoutProgressInput
    connect?: FlashCardWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FlashCardUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<FlashCardCreateWithoutProgressInput, FlashCardUncheckedCreateWithoutProgressInput>
    connectOrCreate?: FlashCardCreateOrConnectWithoutProgressInput
    upsert?: FlashCardUpsertWithoutProgressInput
    connect?: FlashCardWhereUniqueInput
    update?: XOR<XOR<FlashCardUpdateToOneWithWhereWithoutProgressInput, FlashCardUpdateWithoutProgressInput>, FlashCardUncheckedUpdateWithoutProgressInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FlashCardProgressCreateWithoutFlashCardInput = {
    correctCount?: number
    incorrectCount?: number
    streak?: number
    mastered?: boolean
  }

  export type FlashCardProgressUncheckedCreateWithoutFlashCardInput = {
    id?: number
    correctCount?: number
    incorrectCount?: number
    streak?: number
    mastered?: boolean
  }

  export type FlashCardProgressCreateOrConnectWithoutFlashCardInput = {
    where: FlashCardProgressWhereUniqueInput
    create: XOR<FlashCardProgressCreateWithoutFlashCardInput, FlashCardProgressUncheckedCreateWithoutFlashCardInput>
  }

  export type FlashCardProgressUpsertWithoutFlashCardInput = {
    update: XOR<FlashCardProgressUpdateWithoutFlashCardInput, FlashCardProgressUncheckedUpdateWithoutFlashCardInput>
    create: XOR<FlashCardProgressCreateWithoutFlashCardInput, FlashCardProgressUncheckedCreateWithoutFlashCardInput>
    where?: FlashCardProgressWhereInput
  }

  export type FlashCardProgressUpdateToOneWithWhereWithoutFlashCardInput = {
    where?: FlashCardProgressWhereInput
    data: XOR<FlashCardProgressUpdateWithoutFlashCardInput, FlashCardProgressUncheckedUpdateWithoutFlashCardInput>
  }

  export type FlashCardProgressUpdateWithoutFlashCardInput = {
    correctCount?: IntFieldUpdateOperationsInput | number
    incorrectCount?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    mastered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FlashCardProgressUncheckedUpdateWithoutFlashCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    incorrectCount?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    mastered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FlashCardCreateWithoutProgressInput = {
    term: string
    definition: string
    createdAt?: Date | string
  }

  export type FlashCardUncheckedCreateWithoutProgressInput = {
    id?: number
    term: string
    definition: string
    createdAt?: Date | string
  }

  export type FlashCardCreateOrConnectWithoutProgressInput = {
    where: FlashCardWhereUniqueInput
    create: XOR<FlashCardCreateWithoutProgressInput, FlashCardUncheckedCreateWithoutProgressInput>
  }

  export type FlashCardUpsertWithoutProgressInput = {
    update: XOR<FlashCardUpdateWithoutProgressInput, FlashCardUncheckedUpdateWithoutProgressInput>
    create: XOR<FlashCardCreateWithoutProgressInput, FlashCardUncheckedCreateWithoutProgressInput>
    where?: FlashCardWhereInput
  }

  export type FlashCardUpdateToOneWithWhereWithoutProgressInput = {
    where?: FlashCardWhereInput
    data: XOR<FlashCardUpdateWithoutProgressInput, FlashCardUncheckedUpdateWithoutProgressInput>
  }

  export type FlashCardUpdateWithoutProgressInput = {
    term?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashCardUncheckedUpdateWithoutProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}