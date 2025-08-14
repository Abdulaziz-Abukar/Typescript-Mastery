# ex01-object-types/README.md

**Goal**: Practice typing object literals with required, optional, and readonly properties.

## Tasks:

1. Create `car.ts`:
   - Object `car` with:
     - `make` (string), `model`(string), `year`(number), `color`(optional string)
   - Function `printCar(car)` that logs all properties, using `"Unknown color"` if `color` is missing
2. Create `coordinates.ts`:
   - Object `origin` with `x` and `y` as **readonly** numbers.
   - Try to change `origin.x` - confirm TS error.
