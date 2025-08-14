function wrapInArray<T>(value: T): T[] {
  return [value];
}

console.log(wrapInArray<number>(2));
console.log(wrapInArray<string>("dd"));
console.log(wrapInArray<object>({ name: "abdulaziz", age: 25 }));
