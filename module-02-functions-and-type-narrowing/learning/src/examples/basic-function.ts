// Basic function with explicit parameter + return types
function greet(name: string): string {
  return `Hello, ${name}`;
}

// Function with inferred return type
function shout(message: string) {
  return message.toUpperCase(); // TS infers string
}

console.log(greet("Abdulaziz"));
console.log(shout("typescript is awesome"));
