/*
    Create a mapped type OptionalAll<T> that makes every property of T optional.
    Test it with:
        interface Person {name: string; age: number}
*/

interface Person {
  name: string;
  age: number;
}

type OptionalAll<T> = {
  [K in keyof T]?: T[K];
};

let optionalPerson: OptionalAll<Person> = {
  name: "abdulaziz",
};
console.log(optionalPerson);
