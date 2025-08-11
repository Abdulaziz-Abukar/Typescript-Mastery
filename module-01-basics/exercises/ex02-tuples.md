# Tasks

## 1. Create `position.ts`:

- Define a `Point2D` tuple type `[x: number, y: number]`.
- Write a function `distance(a: Point2D, b: Point2D): number` (Euclidean).
- Test it with a few points.

## 2. Create `httpTuples.ts`:

- Define a labeled tuple type `HttpResult = [statusCode: number, message: string]`.
- Write `formatResult(r: HttpResult): string` that returns `"200 OK"`, `"404 Not Found"`, etc.

## 3. Create `roster.ts`:

- Make an array of **tuples**: `[id: number, name: string]` for at least 2 items.
- Write `findNameById(roster, id)` that returns the `name` or `undefined`.

### Acceptance criteria:

- Use tuple **types** (not plain arrays) where specified.
- No `any`
- `npm run typecheck` passes
