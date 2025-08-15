# ex04-generics-in-interfaces

**Goal**: Parameterize data models.

## Tasks:

1. `apiResponse.ts`
   - Interface `ApiResponse<T>` with `status: number` and `payload: T`.
   - Create:
     - `ApiResponse<string>`
     - `ApiResponse<{name: string; age: number}>`
2. `paginatedResponse.ts`
   - Interface `PaginatedResponse<T>` with:
     - `items: T[]`
     - `total: number`
   - Create an example for `PaginatedResponse<User>` where `User` is `{ id: number; username: string;}`
