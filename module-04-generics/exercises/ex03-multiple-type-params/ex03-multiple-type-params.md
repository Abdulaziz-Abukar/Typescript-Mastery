# ex03-multiple-type-params

**Goal**: Work with more than one generic parameter.

Tasks:

1. `merge.ts`
   - Function `merge<T, U>(obj1: T, obj2: U): T & U`
   - Merge `{id: 1}` with `{name: "Bobby"}` and log the result
2. `pair.ts`
   - Function `pair<K, V>(key: K, value: V): [K, V]`
   - Create a string-number pair and a boolean-object pair
