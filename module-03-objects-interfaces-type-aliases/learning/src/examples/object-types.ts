// Basic object type
let user: { name: string; age: number } = {
  name: "Abdulaziz",
  age: 25,
};

// Optional property
let partialUser: { name: string; age?: number } = {
  name: "Abdulaziz",
};

// Readonly properties
let point: { readonly x: number; readonly y: number } = { x: 0, y: 0 };
// point.x = 5; // ❌ Cannot assign to 'x'
console.log(user, partialUser, point);
