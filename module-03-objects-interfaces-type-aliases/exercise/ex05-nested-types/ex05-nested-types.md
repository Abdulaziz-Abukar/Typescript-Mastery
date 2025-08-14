# ex05-nested-types/README.md

**Goal**: Combine interfaces with nested types.

## Tasks:

1. Create `order.ts`:
   - Interface `Address` with `street`, `city`, `postalCode` (all strings)
   - Interface `Order` with:
     - `id` (string)
     - `total` (number)
     - `shippingAddress`: (Address)
   - Create an `order1` that matches
2. Create `school.ts`:
   - Interface `Teacher` with `name` and `subject`.
   - Interface `School` with:
     - `name`
     - `teachers` (array of `Teacher`)
   - Create a `school1` object that matches.
