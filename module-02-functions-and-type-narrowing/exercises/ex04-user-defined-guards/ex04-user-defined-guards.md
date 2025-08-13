# ex04-user-defined-guards/README.md

**Goal**: Write type predicate functions to reuse your narrowing logic.

## Setup types:

- `type Admin = { role: "admin"; id: string; permissions: string[] }`

- `type Member = { role: "member"; id: string; expiresAt?: Date }`

- `type Account = Admin | Member`

## Tasks:

1. Write a **type guard** `isAdmin(a: Account): a is Admin`

   - Returns true if `role === "admin"` (and you may also check `permissions` is an array).

2. Write `canAccessSettings(a: Account): boolean`

   - Uses `isAdmin` to allow admins.

   - Members are denied.

3. Write `getExpiry(a: Account): Date | null`

   - If `Member` and `expiresAt` is set, return it; otherwise `null`.

   - If `Admin`, return `null`.

### Acceptance criteria

- isAdmin uses a type predicate (a is Admin).

- Other functions consume the guard for clean code.

- No any or forced casts.
