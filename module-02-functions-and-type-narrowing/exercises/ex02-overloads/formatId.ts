function formatId(id: number): string;
function formatId(id: string): string;
function formatId(id: number | string): string {
  return typeof id === "number" ? `#${id}` : `${id.toUpperCase()}`;
}

console.log(formatId(55));
console.log(formatId("abc"));
