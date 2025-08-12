function greetUser(name: string, excited?: boolean): string {
  return excited ? `Hello, ${name}!` : `Hello, ${name}`;
}
console.log(greetUser("abdulaziz", true));
console.log(greetUser("abdulaziz"));
console.log(greetUser("abdulaziz", false));
