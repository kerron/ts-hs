export type TLazy<T> = () => T;

export type TLazyNumber = TLazy<number>;

export type TLazySum = (a: TLazyNumber, b: TLazyNumber) => TLazyNumber;

