// Interface definition
interface User {
  name: string;
  age: number;
  readonly id: string;
  nickname?: string; // optional
}

const u1: User = {
  name: "Bobby",
  age: 24,
  id: "u_123",
};

// Interface extension
interface Employee extends User {
  role: string;
}

const e1: Employee = {
  name: "Josh",
  age: 30,
  id: "u_456",
  role: "Developer",
};

console.log(u1, e1);
