// Combine advanced types for real-world patterns

// 1) DeepPartial — recursively make all props optional
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

interface Settings {
  theme: { mode: "light" | "dark"; contrast: number };
  notifications: { email: boolean; sms: boolean };
}

const patch: DeepPartial<Settings> = {
  theme: { mode: "dark" },
};

// 2) Select keys by value type
type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

interface Model {
  id: string;
  name: string;
  age: number;
  active: boolean;
}

type StringKeys = KeysMatching<Model, string>; // "id" | "name"
type BoolKeys = KeysMatching<Model, boolean>; // "active"

// 3) Event name generator with template literals
type Domain = "user" | "order";
type Action = "created" | "updated" | "deleted";
type EventName = `${Domain}.${Action}`;

const e1: EventName = "user.created";
const e2: EventName = "order.deleted";

console.log(patch, e1, e2);
