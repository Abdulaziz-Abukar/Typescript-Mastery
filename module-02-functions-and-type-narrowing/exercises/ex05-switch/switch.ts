type Event =
  | { type: "created"; id: string }
  | { type: "updated"; id: string; changes: string[] }
  | { type: "deleted"; id: string };

function formatEvent(e: Event): string {
  switch (e.type) {
    case "created":
      return `created ${e.id}`;
    case "updated":
      return `updated ${e.id}: ${e.changes.join(",")}`;
    case "deleted":
      return `deleted ${e.id}`;
  }
  const _exhaustive: never = e;
  return _exhaustive;
}

const e1: Event = { type: "created", id: "abc" }; // ✅ OK
const e2: Event = { type: "updated", id: "xyz", changes: ["name"] }; // ✅ OK
const e3: Event = { type: "deleted", id: "123" }; // ✅ OK

const bad: Event = { type: "moved", id: "abc" }; // ❌ Error: type not allowed

console.log(formatEvent(e1));
console.log(formatEvent(e2));
console.log(formatEvent(e3));
console.log(formatEvent(bad));
