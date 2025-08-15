// infer — capture a type inside a conditional

// Extract element type from an array
type ElementType<T> = T extends (infer U)[] ? U : T;

type E1 = ElementType<string[]>; // string
type E2 = ElementType<number>; // number

// Extract return type of a function
type Return<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser() {
  return { id: 1, name: "Abdulaziz" };
}
type GetUserReturn = Return<typeof getUser>; // { id: number; name: string }

// Distributive conditional types: applies to each union member
type ExcludeString<T> = T extends string ? never : T;

type D1 = ExcludeString<string | number | boolean>; // number | boolean

// Practical: Promise unwrapping
type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
type U1 = UnwrapPromise<Promise<number>>; // number
type U2 = UnwrapPromise<string>; // string

const checkE1: E1 = "ok";
const checkD1: D1 = true; // boolean is allowed
console.log(checkE1, checkD1);
