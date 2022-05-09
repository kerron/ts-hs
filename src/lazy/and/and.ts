import { TLogicalOperator } from "@ts-hs/types/types";

// This works the same as the logical AND operator (&&).
// It returns true if both operands are true and returns false otherwise.
export const and: TLogicalOperator = (a, b) => () => !a() ? false : b();
