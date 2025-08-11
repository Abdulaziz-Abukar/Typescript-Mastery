function makeGreeting(name: string, excited?: boolean): string {
  if (excited) {
    return `Hello, ${name}!`;
  }
  return `Hello, ${name}`;
}

export { makeGreeting };
