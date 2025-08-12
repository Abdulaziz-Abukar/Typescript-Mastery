// Overload signatures
function formatId(id: number): string;
function formatId(id: string): string;

// Simple implementation
function formatId(id: number | string): string {
  return typeof id === "number" ? `#${id}` : id.toUpperCase();
}

console.log(formatId(101)); // #101
console.log(formatId("abc123")); // "ABC123"
