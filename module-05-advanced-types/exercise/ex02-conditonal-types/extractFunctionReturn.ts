type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser() {
  return { id: 1, name: "Abdulaziz" };
}
function getId() {
  return 42;
}

type UserReturn = ReturnTypeOf<typeof getUser>;
type IdReturn = ReturnTypeOf<typeof getId>;

const u: UserReturn = { id: 1, name: "Abdulaziz" };
const i: IdReturn = 42;

// const badU: UserReturn = { id: "wrong", name: "oops" };
// const badI: IdReturn = "not a number";
