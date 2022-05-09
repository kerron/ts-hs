# ts-hs

Lazy evaluated functions written in TypeScript, and inspired by Haskell.

> In programming language theory, lazy evaluation, or call-by-need, is an evaluation strategy which delays the evaluation of an expression until its value is needed (non-strict evaluation) and which also avoids repeated evaluations (sharing).
>
> The benefits of lazy evaluation include:
>
> - The ability to define control flow (structures) as abstractions instead of primitives.
> - The ability to define potentially infinite data structures. This allows for more straightforward implementation of some algorithms.
> - The ability to define partially-defined data structures where some elements are errors. This allows for rapid prototyping

[source](https://en.wikipedia.org/wiki/Lazy_evaluation)

## How to use

```bash
$ npm i ts-hs
$ npm install
$ npm run dev
```

## Example

### Lazy Sum

```js
/**
 * This function uses lazy evaluation.
 * 1 + 5 is not evaluated until it is called within the lazy sum fn.
 * That because the arguments to `sum` are functions, which are invoked
 * only when needed.
 */
export const sum: TLazySum = (a, b) => {
  return () => a() + b();
};

console.log(
  sum(
    () => 1 + 5,
    () => 4
  )()
); // 10
```

See `TLazySum` type [here](https://github.com/kerron/ts-hs/blob/main/src/types/types.ts)
