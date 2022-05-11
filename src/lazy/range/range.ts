import { TLazy, TLazyList } from "@ts-hs/types/types";

/**
 * Creates an infinite range starting with at the provided value.
 * Though this range is infinite, the next value in the list is processed only when needed.
 */
export const range = (begin: TLazy<number>): TLazyList<number> => {
  return () => {
    const x = begin();
    return {
      head: () => x,
      tail: range(() => x + 1),
    };
  };
};

export default range;
