type Flatten<T> = T extends null | undefined | never ? never : T;

type A = Flatten<string | null | undefined>;
type B = Flatten<number | never | undefined>;

// const a: A = "string";
// const b: B = number
