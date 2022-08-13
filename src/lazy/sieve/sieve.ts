import filter from "@ts-hs/lazy/filter/filter";
import { TLazyList } from "@ts-hs/types/types";

export const sieve = (xs: TLazyList<number>): TLazyList<number> => {
  return () => {
    const pair = xs();
    if (pair === null) {
      return null;
    } else {
      let y = pair.head();
      return {
        head: () => y,
        tail: sieve(filter((x: number) => x % y !== 0, pair.tail)),
      };
    }
  };
};

export default sieve;
