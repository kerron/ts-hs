import { TLazy } from "@ts-hs/types/types";

// lazy trace
export const trace = <T>(x: TLazy<T>, message: string): TLazy<T> => {
  return () => {
    console.log(message);
    return x();
  };
};

export default trace;
