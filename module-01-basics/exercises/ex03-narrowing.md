# Narrowing

Goal: Use **union types** with proper **type narrowing** (`typeof`, `in`, equality checks).

## Setup types:

- Define two object types:
  - `PaidUser = { id: string; plan: "pro" | "team"; seats?: number}`
  - `FreeUser = {id: string; plan: "free"}`
- Define `User = PaidUser | FreeUser`

## Tasks:

1. `describeUser(user: User): string`

   - If `plan` is `"free"`, return e.g., `"User u_1 on FREE plan"`.
   - If `plan` is `"pro"` or `"team"`, include seats if present (e.g., `"User u_2 on PRO plan (3 seats)"`).
   - **Hint** Use a union on `plan` and narrow with equality checks.

2. `canCreateProject(user: User): boolean`

   - Return `true` for `"pro"` or `"team"`, `false` for `"free"`.

3. `ensureSeats(user: User): number`
   - For paid users, if `seats` is missing, default to `1`; return the seat count.
   - For free users, return `0`.
   - **Hint**: Use `'in'` or check `user.plan !== "free"` to narrow.

### Acceptance Criteria:

- Proper narrowing, no casts like `as PaidUser` unless absolutely necessary.
- No `any`.
- `npm run typecheck` passes.
