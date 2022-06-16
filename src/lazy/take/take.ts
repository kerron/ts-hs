import { TLazy, TLazyList } from "@ts-hs/types/types";

export const take = <T>(n: TLazy<number>, xs: TLazyList<T>): TLazyList<T> => {
  return () => {
    let m = n();
    let pair = xs()!;
    if (m > 0) {
      return {
        head: pair.head,
        tail: take(() => m - 1, pair.tail),
      };
    } else {
      return null;
    }
  };
};

export default take;
