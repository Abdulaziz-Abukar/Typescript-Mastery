// Optional parameter
function logMessage(msg: string, prefix?: string): void {
  console.log(prefix ? `${prefix}: ${msg}` : msg);
}

// Default parameter
function greet(name: string, excited = false): string {
  return excited ? `Hello ${name}!` : `Hello, ${name}`;
}

logMessage("System starting"); // no prefix
logMessage("System starting", "INFO"); // with prefix

console.log(greet("Abdulaziz"));
console.log(greet("Abdulaziz", true));
