# Goal: Practice function overloads with multiple valid input shapes.

## Tasks:

1. Create `formatId.ts`

   - Overload signatures:
     - `formatId(id: number): string`
     - `formatId(id: string): string`
   - Implementation accepts `number | string` and returns a string.
   - Behavior:
     - number -> prefix with `#` (e.g., `42` -> `"#42"`)
     - string -> uppercase it (e.g., `"abc"` -> `"ABC"`)

2. Create `pick.ts`
   - Overload signatures:
     - `pick<T, K extends keyof T>(obj: T, key: K): T[K]`
     - `pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>`
   - Implementation should support both a **single key** (returns the value) and **array of keys** (returns an object with those keys).

### Acceptance criteria

- At least **two** overload signatures per function.
- Single implementation that narrows correctly and returns the right type.
- No `as any` casts.
