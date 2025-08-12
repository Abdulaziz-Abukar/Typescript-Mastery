# Goal: Get crisp with parameter/return types, optional & default params.

## Tasks:

1. Create `sum.ts`
   - Write a function `sum(a: number, b: number): number` that returns the sum
   - Add 2-3 calls with different values and log the results.
2. Create `greetUser.ts`
   - Function `greetUser(name: string, excited?: boolean): string`
   - if `excited` is true, add an exclamation point at the end.
   - Demonstrate calls with and without `excited`.
3. Create `formatLabel.ts`
   - Function `formatLabel(label: string, prefix = "INFO"): string`
   - Returns `"PREFIX: label"`.
   - Show at least one call using the default and one overriding it.

### Acceptance criteria

- No `any`
- Explicit parameter and return types for all functions.
- `npm run typecheck` passes.
