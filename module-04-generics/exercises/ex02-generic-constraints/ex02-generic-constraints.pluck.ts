function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Abdulaziz", age: 25 };
const nameValue = pluck(user, "name"); // type is string
const ageValue = pluck(user, "age"); // type is number

console.log(nameValue);
console.log(ageValue);

// pluck(user, "email"); // Error: "email" is not a key of user
