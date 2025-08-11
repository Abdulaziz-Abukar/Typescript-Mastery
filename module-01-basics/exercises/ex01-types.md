# Task:

## 1. Create a `profile.ts` that exports:

- A `displayName` (string), `age` (number), and `isStudent` (boolean). Use **inference** where sensible, and **annotations** at least once.
- A variable `maybeEmail` that can be a `string` or `undefined`. Initialize as `undefined`, then assign an email.

## 2. Create a `makeGreeting.ts` with a function `makeGreeting(name: string, excited?: boolean): string`

- If `excited` is true, return `"Hello, NAME!`, else `"Hello, NAME"`.
- Demonstrate calls with and without the optional flag.

## 3. Create a `safeParseInt.ts` with a function `safeParseInt(x: string | number): number`.

- if `x` is a number, return it.
- if `x` is a string, parse it (base 10) and return the number.
- if parsing fails (e.g., "abc"), return `NaN`
- **Constraint** Do not use `any`.

### Acceptance criteria:

- No `any`.
- Functions have parameter and return types.
- `npm run typecheck` passes.
