/*
    Create a type PromiseResult<T> that extracts the resolved value type from a Promise<T>.
    Test with:
        type A = PromiseResult<Promise<number>>; // number
        type B = PromiseResult<string>;          // string

*/

type PromiseResult<T> = T extends Promise<infer R> ? R : T;

type A = PromiseResult<Promise<number>>; // number
type B = PromiseResult<string>; // string

const a: A = 42; // ok
