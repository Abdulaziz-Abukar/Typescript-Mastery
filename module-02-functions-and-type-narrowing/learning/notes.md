# Module 2: Functions & Type Narrowing

## 1) Function Basics in TypeScript

Functions in TS are just like JS, but you **label** the inputs and outputs with types.

### Syntax:

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

- `name: string` -> input type
- `: string` after parentheses -> output type  
  if you leave out the output type, TS **infers** it from the `return` statements.

## 2) Optional & Default Parameters

You can mark a parameter as **optional** with `?`:

```ts
function logMessage(msg: string, prefix?: string) {
  console.log(prefix ? `${prefix}: ${msg}` : msg);
}
```

Optional means it's `string | undefined`.

You can also give **default values**:

```ts
function greet(name: string, excited = false) {
  return excited ? `Hello, ${name}!` : `Hello, ${name}`;
}
```

Default parameters automatically make the parameter optional.

## 3) Function Overloads

Overloads let you describe **multiple valid call signatures**:

```ts
function formatId(id: number): string;
function formatId(id: string): string;
function formatId(id: number | string): string {
  return typeof id === "number" ? `#${id}` : id.toUpperCase();
}
```

- The first two lines are **overload signatures** (no body).
- The last is the actual function implementation.

## 4) Type Narrowing

**Type narrowing** = when TS takes a broad type (like a union) and **shrinks** it inside a code block because of checks you do.

Common narrowing methods:

- `typeof` **check**:

```ts
if (typeof value === "string") {
  // value is a string here
}
```

- `in` **check**:

```ts
if ("seats" in user) {
  // user must be a PaidUser
}
```

- **Equality check**:

```ts
if (user.plan === "free") {
  // narrowed to FreeUser
}
```

- **Truthiness check**:

```ts
if (user.seats) {
  // narrowed to non-null, non-undefined value
}
```

## The `never` Type for Exhaustive Checks

When you cover **all possible cases** in a union, TS can use the `never` type to catch missing cases:

```ts
type Plan = "free" | "pro";

function handlePlan(plan: Plan) {
  if (plan === "free") return "Free plan";
  if (plan === "pro") return "Pro plan";
  const _exhaustive: never = plan; // Error if Plan gets new value
}
```

## Why This Module Matters

- Functions are where **type meet logic** - the type labels help TS warn you if you pass bad data or return the wrong thing.
- Type narrowing is **how you "unlock"** the correct fields/methods for a specific type from a union.
- Overloads make functions friendlier to use when you support multiple input shapes.

### Quick Analogy

- **Type narrowing** is like a bouncer checking ID at a club - once you're inside, you get access to certain "fields" (pun intended).
- Optional/default parameters are like "dress code optional" - You can come with or without them, but defaults give you something to wear if you didn't bring your own.
