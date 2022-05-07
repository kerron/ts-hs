import { TLazySum } from "@ts-hs/types/types";

// Arguments are lazily evaluated. This means they are called only when needed.
export const sum: TLazySum = (a, b) => {
  return () => a() + b();
};

export default sum;
