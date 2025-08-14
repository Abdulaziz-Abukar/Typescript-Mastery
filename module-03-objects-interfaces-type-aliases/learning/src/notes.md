# Module 3: Objects, Interfaces & Type Aliases

## 1) Object Types

- Object types describe the shape of an object.
- Each property has a name and type:

```ts
let user: { name: string; age: number } = {
  name: "Abdulaziz",
  age: 25,
};
```

- Properties can be **optional** with `?`.

```ts
let partialUser: { name: string; age?: number } = { name: "abdulaziz" };
```

- Use `readonly` to **prevent reassignment**:

```ts
let point: { readonly x: number; readonly y: number } = { x: 0, y: 0 };
// point.x = 5; // Error: Cannot assign to 'x';
```

## 2) Interfaces

- Interfaces name a shape so it can be reused:

```ts
interface User {
  name: string;
  age: number;
}
```

- Supports **optional** and **readonly** just like object types.
- Can **extend** other interfaces:

```ts
interface Person {
  name: string;
}
interface Employee extends Person {
  role: string;
}
```

- Objects typed with an interface must have all required properties, but can have more (excess property checks apply for literals)

## 3) Type Aliases

- Type aliases create a name for **any** type, not just objects:

```ts
type User = { name: string; age: number };
type ID = string | number;
```

- Can also use intersections and unions:

```ts
type Person = { name: string };
type Employee = { role: string };
type StaffMember = Person & Employee; // must have both
```

## 4) Interface vs Type Alias

### Interface

- Best for describing object shapes or contracts.
- Supports `extends`.
- Can be merged (declaration merging).

### Type Alias

- Works with primitives, unions, tuples, and more
- Cannot be merged (new name must be new)

Rule of thumb:

- Use **interface** when describing the shape of objects/classes.
- use **type** when you need unions, intersections, primitives, or tuples.

## 5) Index Signatures

- Allows flexible property names:

```ts
interface StringMap {
  [key: string]: string;
}
```

- All properties must match the declared type

## 6) Nested Types

- Objects can contain other typed objects:

```ts
interface Address {
  street: string;
  city: string;
}

interface User {
  name: string;
  address: Address;
}
```

- Type safety applies deep into the structure.

## Why This Module Matters

- This is how you give **structure** to complex data in TS.
- Almost every API, form, or DB entity is modeled with object types.
- Interfaces and type aliases are core building blocks for scalable code.

## Quicky Anology

- **Object type** = recipe for a single dish
- **Interface** = named recipe card you can hand around the kitchen
- **Type alias** = label for anything: a recipe, a list of ingredients, or even "either soup or salad."
