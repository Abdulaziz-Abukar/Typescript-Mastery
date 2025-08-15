// --- Setup types
interface User {
  id: number;
  name: string;
  email?: string;
}

// Partial<T> — all props optional
type PartialUser = Partial<User>;
const draft: PartialUser = { name: "Abdulaziz" };

// Required<T> — all props required (even ones that were optional)
type StrictUser = Required<User>;
const strictU: StrictUser = { id: 1, name: "Aesha", email: "a@x.com" };

// Readonly<T> — cannot reassign properties
type FrozenUser = Readonly<User>;
const frozen: FrozenUser = { id: 2, name: "Josh" };
// frozen.name = "Mike"; // ❌ Cannot assign to 'name'

// Pick<T, K> — select a subset
type UserPreview = Pick<User, "id" | "name">;
const preview: UserPreview = { id: 3, name: "Mariam" };

// Omit<T, K> — remove keys
type UserWithoutEmail = Omit<User, "email">;
const noEmail: UserWithoutEmail = { id: 4, name: "Vegeta" };

// Record<K, T> — map keys to a value type
type Role = "admin" | "member";
type Permissions = Record<Role, string[]>;
const perms: Permissions = {
  admin: ["read", "write", "delete"],
  member: ["read"],
};

console.log(draft, strictU, frozen, preview, noEmail, perms);
