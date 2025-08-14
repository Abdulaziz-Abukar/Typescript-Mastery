# ex03-type-aliases/README.md

**Goal**: Use type aliases for unions and intersections.

## Tasks:

1. Create `user.ts`:
   - `type ID = string | number`
   - `type BasicUser = {id: ID; name: string}`
   - `type PremiumUser = BasicUser & {subscription: "gold" | "platnium"}`
   - Create one of each and log them
2. Create `shape.ts`
   - `type Circle = {kind: "circle"; radius: number}`
   - `type Rectangle = {kind: "rectangle"; width: number; height: number}`
   - `type Shape = Circle | Rectangle`
   - Function `area(shape: Shape)` using narrowing to return the correct area.
