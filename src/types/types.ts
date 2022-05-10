export type TLazy<T> = () => T;

export type TLazyNumber = TLazy<number>;

export type TLazySum = (a: TLazyNumber, b: TLazyNumber) => TLazyNumber;

export type TLogicalOperator = (
  a: TLazy<boolean>,
  b: TLazy<boolean>
) => TLazy<boolean>;

export type TLazyList<T> = TLazy<{
  head: TLazy<T>;
  tail: TLazyList<T>;
} | null>;
