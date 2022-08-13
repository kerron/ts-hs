import { sum } from "@ts-hs/lazy";
import { and } from "@ts-hs/lazy/and/and";
import range from "@ts-hs/lazy/range/range";
import trace from "@ts-hs/lazy/trace/trace";
import { strictSum } from "@ts-hs/strict";

/**
 * strictSum:
 * This function uses strict evaluation.
 * Its arguments are executed early - before function execution
 */
console.log(strictSum(4, 3)); // 7

/**
 * sum:
 * This function uses lazy evaluation.
 * 1 + 5 is not evaluated until it is called within the lazy sum fn.
 * That because the arguments to `sum` are functions, which are invoked
 * only when needed.
 */
console.log(
  sum(
    () => 1 + 5,
    () => 4
  )()
); // 10

/**
 * range:
 * Creates an infinite range starting with at the provided value.
 * Though this range is infinite, the next value in the list is processed only when needed.
 */
console.log(range(() => 1)()!.head()); // 1
console.log(
  range(() => 1)()!
    .tail()!
    .head()
); // 2
console.log(
  range(() => 1)()!
    .tail()!
    .tail()!
    .head()
); // 3

/**
 * and:
 * This function uses lazy evaluation.
 * The first argument is evaluated only when needed.
 * The second argument is evaluated only if the first argument is true.
 */
console.log(
  and(
    trace(() => false, "left evaluated"),
    trace(() => true, "right evaluated")
  )()
); // left evaluated
