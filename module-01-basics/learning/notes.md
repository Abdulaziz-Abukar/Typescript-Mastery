# Module 1: TypeScript Basics & Types — Notes

## 1) Primitive Types & Inference

- Primitives: `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`.
- Annotation vs inference:
  - Annotation: `let age: number = 23`
  - Inference: `let age = 23` (TS infers `number` from first assignment)
- Once inferred, assigning an incompatible type is a compile error.
- Prefer inference when obvious; add annotations for clarity at boundaries (function params/returns, external data).

## 2) Arrays & Tuples

- Arrays:
  - `number[]` or `Array<number>` — both equivalent.
  - Mixed types only if you explicitly use a union: `(number | string)[]`.
- Tuples:
  - Fixed length + fixed types per position.
  - Great for coordinates, pairs, result tuples: `[statusCode: number, message: string]`.
  - Use labeled tuples for readability.

## 3) Union & Intersection Types

- Union (`A | B`): value can be one of several types. Use **narrowing** (e.g., `typeof`, `'in'`, equality checks) before using type-specific operations.
- Intersection (`A & B`): value must satisfy **all** combined types. Helpful for composing capabilities (e.g., `WithTimestamps & WithId`).

## Practical Tips

- Avoid `any`. If needed while iterating, prefer `unknown` + narrow later.
- Keep types close to usage. Start simple; extract to `type`/`interface` only when reused.
- Use unions for flexible inputs; use intersections to combine capabilities.

## The Big Idea

TypeScript is basically **JavaScript + Labels that descibe what can go in a variable**.  
Those labels are called **types**, and they help you:

1. Catch mistakes before running your code.
2. Understand your own code months later.
3. Give your editor super-powers (auto-complete, warnings, docs)

In this module, you're learning the **simplest labels** you can put on variables, arryas, and objects.

### 1) Primitive Types - "Whats in the box?"

A **primitive** is just a basic, single value like text, numbers, true/false.

In JS:

```js
let name = "Goku"; // text
let age = 9001; // number
let isAlive = true; // true/false
```

In TS:

```ts
let name: string = "Goku"; // name holds text
let age: number = 9001; // age holds numbers
let isAlive: boolean = true; // isAlive holds true or false
```

If you try:

```ts
age = "Vegeta"; // Error: age is a number
```

TypeScript stops you - it's like having a **bouncer** for your variables.

Sometimes TS guesses for you (**inference**):

```ts
let planet = "Earth"; // TS says: "Looks like text (string)"
```

From now on, `planet` can only be a string.

### 2) Arrays & Tuples - "A box with compartments"

**Arrays** = a box that can hold multiple items of the same type.

```ts
let scores: number[] = [10, 20, 30]; // only numbers allowed
let names: string[] = ["Goku", "Vegeta"]; // only strings
```

If you want a mix:

```ts
let mixed: (number | string)[] = [1, "two", 3];
```

Here, `(number | string)` is a **union type**

**Tuples** = an array with a fixed number of slots, each with its own type.

```ts
let person: [string, number] = ["Goku", 9001];
```

- first slot: string
- second slot: number  
  the order and count matter

### 3) Union Types - "This OR That"

A union says variabels can be **one of several types**

```ts
let id: string | number;
id = 42;
id = "abc123";
id = true;
```

It's like telling TS: "i'll bring either a driver's license or a passport

### 4) Intersection Types - "This AND That"

An intersection says a value must satisfy **all the given types**.

```ts
type Person = { name: string };
type Employee = { role: string };

type StaffMember = Person & Employee; // must have BOTH

let dev: StaffMember = { name: "Vegeta", role: "Prince of All Saiyans" };
```

it's like saying: "You need to be a **person** AND an **employee**

### Why this Module Matters

Everything else in TypeScript builds on this:

- Functions use these types for their inputs/outputs
- Objects and APIs use unions and intersections for flexibility or composition.
- Arrays and tuples appear everywhere in real-world data

#### Quick Analogy

- Primitives = individual Lego bricks.
- Arrays = a pile of identical bricks.
- Tuples = a small fixed Lego kit with exactly the right pieces
- Union = Choose one of these sets of bricks
- Intersection = Must have ALL these sets of bricks
