// Conditional types: T extends U ? X : Y

type IsString<T> = T extends string ? "yes" : "no";
type A = IsString<string>; // "yes"
type B = IsString<number>; // "no"

// Narrowing value types at the type level
type ResponseBody<T> = T extends { data: infer D } ? D : never;

type ApiOk = { status: 200; data: { id: number; name: string } };
type ApiErr = { status: 500; error: string };

type BodyOk = ResponseBody<ApiOk>; // { id: number; name: string }
type BodyErr = ResponseBody<ApiErr>; // never

// Practical: Nullable to NonNullable via conditional
type NonNull<T> = T extends null | undefined ? never : T;

type X = NonNull<string | null>; // string
type Y = NonNull<number | undefined | 0>; // number | 0

const checkA: A = "yes";
const checkB: B = "no";
console.log(checkA, checkB);
