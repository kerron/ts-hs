import { TLazyList } from "@ts-hs/types/types";

export const filter = <T>(
  f: (T: T) => boolean,
  xs: TLazyList<T>
): TLazyList<T> => {
  return () => {
    let pair = xs();
    if (pair === null) {
      return null;
    } else {
      let x = pair.head();
      if (f(x)) {
        return {
          head: () => x,
          tail: filter(f, pair.tail),
        };
      } else {
        return filter(f, pair.tail)();
      }
    }
  };
};

export default filter;
