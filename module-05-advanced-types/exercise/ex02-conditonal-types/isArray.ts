/*
    Create a type IsArray<T> that resolves to "array" if T is an array, others "other"
    test with number[], string, and boolean[]
*/
type IsArray<T> = T extends any[] ? "array" : "other";

type numArray = IsArray<number[]>;
type str = IsArray<string>;
type boolArray = IsArray<boolean[]>;

const test1: numArray = "array";
const test2: str = "other";
const test3: boolArray = "array";

// const bad: str = "array";
