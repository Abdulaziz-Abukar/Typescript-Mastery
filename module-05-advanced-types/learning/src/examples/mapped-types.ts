// Mapped types transform every property

type ReadonlyAll<T> = {
  readonly [K in keyof T]: T[K];
};

type OptionalAll<T> = {
  [K in keyof T]?: T[K];
};

type NullableAll<T> = {
  [K in keyof T]: T[K] | null;
};

interface Profile {
  id: number;
  username: string;
  bio?: string;
}

type ROProfile = ReadonlyAll<Profile>;
type OptProfile = OptionalAll<Profile>;
type NullProfile = NullableAll<Profile>;

const p1: ROProfile = { id: 1, username: "abu", bio: "hello" };
// p1.username = "new"; // ❌ readonly

const p2: OptProfile = {};
const p3: NullProfile = { id: 1, username: "u", bio: null };

console.log(p1, p2, p3);
