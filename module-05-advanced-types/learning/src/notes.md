# Module 5: Advanced Types

## 1) Utility Types

TypeScript ships with built-in helpers to transform existing types.

- `Partial<T>` -> Makes all properties optional.

```ts
interface User {
  id: number;
  name: string;
}

type PartialUser = Partial<User>;
// {id?: number; name?: string}
```

- `Required<T>` -> Opposite of `Partial`, makes all properties required.
- `ReadOnly<T>` -> Makes all properties immutable.
- `Pick<T, K>` -> Select only certain keys from a type.
- `Omit<T, K>` -> Remove certain keys from a type.
- `Record<K, T>` -> Create a type with keys `K` and values `T`.

### Example:

```ts
type UserPreview = Pick<User, "id" | "name">;
type UserWithoutId = Omit<User, "id">;
type StringRecord = Record<string, string>;
```

## 2) Conditional Types

A conditional type chooses between two types based on a condition:

```ts
type isString<T> = T extends string ? "yes" : "no";

type A = isString<string>; // "yes"
type B = isString<number>; // "no"
```

- Syntax: `T extends U ? X : Y`
- Often used with generics

## 3) Mapped Types

Iterate over keys of a type to transform them:

```ts
type ReadonlyUser<T> = {
  readonly [K in keyof T]: T[K];
};

type User = { id: number; name: string };
type ImmutableUser = ReadonlyUser<User>;
```

Here:

- `K in keyof T` -> loop over property names of `T`
- `T[K]` -> get the type of that property

## 4) Template Literal Types

Create string literal types from other types:

```ts
type EventName = `on${Capitalize<string>}`;
type ColorVariant = "primary" | "secondary";
type ColorClass = `btn-${ColorVariant}`; // "btn-primary" | "btn-secondary"
```

- Can combine with unions to generate many possibilities.

## 5) `infer` Keyword

`infer` lets you capture a type inside a conditional type.
Example: Extract array element type:

```ts
type ElementType<T> = T extends (infer U)[] ? U : T;

type A = ElementType<string[]>; // string
type B = ElementType<number>; // number
```

Here, `infer U` means "if `T` is an array, figure out its element type and call it `U`."

## 6) Distributive Conditional Types

When you pass a union to a conditional type, it runs the check on each number.
Example:

```ts
type ExcludeString<T> = T extends string ? never : T;

type A = ExcludeString<string | number>;
// (string -> never) | (number -> number) => never | number => number
```

This is how built-in types like `Exclude` and `Extract` work.

## Key Takeaways

- Utility types = instant type transformations.
- Conditional types = if/else for types.
- Mapped types = loops for types
- Template literal types = dynamic string unions
- `infer` = capture a type inside a conditional
- Distributive conditional types = run logic across union members.
