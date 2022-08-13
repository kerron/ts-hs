import range from "@ts-hs/lazy/range/range";
import sieve from "@ts-hs/lazy/sieve/sieve";

export const primes = sieve(range(() => 2));

export default primes;
