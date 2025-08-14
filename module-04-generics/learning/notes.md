# Module 4: Generics

## 1) What are Generics?

Think of a generic like a **placeholder type**.  
Instead of locking in a specific type, you tell TS:

> "I'll know the type later, when the function/class is used."

### Basic Syntax:

```ts
function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello"); // T = string
identity<number>(42); // T = number
```

Here:

- `T` is a **type parameter** (you can name it anything, but `T` = "Type" is common)
- When you call `identity`, TS **infers** `T` from the argument.

## 2) Why Use Generics?

Without generics:

```ts
function identity(value: any): any {
  return value;
}
```

- Losses type info - you could pass a string and get an untyped result

With generics:

```ts
function identity<T>(value: T): T {
  return value;
}
```

- Keeps type info - if you pass a string, TS knows you'll get a string back

## 3) Generic Functions

You can:

- Pass the type explicitly: `identity<number>(10)`
- Let TS infer it: `identity(10)`

### Example:

```ts
function wrapInArray<T>(value: T): T[] {
  return [value];
}
const nums = wrapInArray(5); // nums: number[]
const strings = wrapInArray("hi"); // strings: string[]
```

## 4) Generic Constraints

Sometimes you don't want **any** type - you want to limit it.  
Use `extends` to constrain:

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello"); // OK (string has length)
getLength([1, 2, 3]); // OK (array has length)
getLength(42); // number has no length
```

## 5) Generics with Multiple Parameters

You can have more than one type parameter:

```ts
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const combo = merge({ name: "Abdulaziz" }, { age: 25 });
// combo: { name: string; age: number }
```

## 6) Generics with Interfaces & Types

Generics aren't just for functions:

```ts
interface ApiResponse<T> {
  status: number;
  payload: T;
}

const userResponse: ApiResponse<{ name: string }> = {
  status: 200,
  payload: { name: "Bobby" },
};
```

## 7) Generics with Classes

```ts
class Box<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }
}

const stringBox = new Box<string>("Hello");
const numberBox = new Box(123); // TS infers T = number
```

## 8) Default Type Parameters

If the caller doesn't pass a type, you can set a default:

```ts
function createMap<K = string, V = number>(): Map<K, V> {
  return new Map<K, V>();
}

const defaultMap = createMap(); // Map<string, number>
const customMap = createMap<number, boolean>(); // Map<number, boolean>
```

## Key Takeaways

- Generics = reusable, type-safe "templates" for types.
- Use constraints (`extends`) to require certain properties.
- Can be applied to functions, interfaces, classes and type aliases.
- Keep names short but meaningful: `T` (Type), `U` (second type), `K` (key), `V` (value), etc.
