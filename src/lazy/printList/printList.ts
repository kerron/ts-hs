import { TLazyList } from "@ts-hs/types/types";

export const printList = <T>(xs: TLazyList<T>): void => {
  let pair = xs();
  while (pair !== null) {
    console.log(pair.head());
    pair = pair.tail();
  }
};

export default printList;
