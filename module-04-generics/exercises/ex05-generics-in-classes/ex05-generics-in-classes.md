# ex05-generics-in-classes

**Goal**: Create reusable data structures

## Task:

1. `box.ts`
   - Class `Box<T>` with:
     - `contents: T`
     - Constructor sets contents
     - Method `getContents(): T`
   - Create `Box<string>` and `Box<number>`.
2. `stack.ts`
   - Class `Stack<T>` with:
     - Private array storage
     - `push(item: T): void`
     - `pop(): T | undefined`
     - `peek(): T | undefined`
     - `size(): number`
   - Test with numbers and strings
