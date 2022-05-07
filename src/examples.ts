import { sum } from "@ts-hs/lazy";
import { strictSum } from "@ts-hs/strict";
/**
 * This function uses strict evaluation.
 * Its arguments are executed early - before function execution
 */
console.log(strictSum(4, 3)); // 7

/**
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
