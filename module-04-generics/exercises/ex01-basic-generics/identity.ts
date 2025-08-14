function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Word"));
console.log(identity<number>(21));
console.log(identity<[]>([]));
