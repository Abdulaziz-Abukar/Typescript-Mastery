function safeParseInt(x: string | number): number {
  if (typeof x === "number") {
    return x;
  }

  return parseInt(x, 10);
}

export { safeParseInt };
