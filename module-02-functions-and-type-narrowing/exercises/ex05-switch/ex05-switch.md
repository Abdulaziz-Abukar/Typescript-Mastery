# ex05-exhaustice-switch/README

**Goal**: Enforce exhaustive handling using `never`.

## Setup types:

- `type Event = {type: "created"; id: string} | {type: "updated"; id: string; changes: string[]} | type(: "deleted"; id: string)`

## Tasks:

1. `formatEvent(e: Event): string`
   - Use a `switch (e.type)` with cases for `"created" | "updated" | "deleted".
   - After the switch, add an **exhaustive check**:
     ```ts
     const _exhaustive: never = e;
     return _exhaustive;
     ```
2. Add a new event (e.g., `{type: "restored"; id: string}`) and confirm the compiler flags the missing case until you handle it.

### Acceptance criteria

- `never`-based exhaustive check present
- All branches return a `string`
- Type error appears when a new union member is added and not handled.
