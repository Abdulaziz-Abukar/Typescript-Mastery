# ex02-generic-constraints

**Goal**: Limit what a type parameter can be.

## Tasks:

1. `getLength.ts`

   - Function `getLength<T extends {length: number}>(item: T): number`
   - Test with string, array, and object with `length` property.
   - Verify number input fails type-check

2. `pluck.ts`
   - Function `pluck<T, K extends keyof T>(obj: T, key: K): T[K]
   - Test with `{name: "Abdulaziz", age: 25}` and keys `"name"` / `"age"`
