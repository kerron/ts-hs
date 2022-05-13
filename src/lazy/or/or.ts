import { TLogicalOperator } from "@ts-hs/types/types";

// This works the same as the logical OR operator (||)
// It checks the second condition only if first condition is false
export const or: TLogicalOperator = (a, b) => () => a() ? true : b();

export default or;
