type PaidUser = { id: string; plan: "pro" | "team"; seats?: number };
type FreeUser = { id: string; plan: "free" };

type User = PaidUser | FreeUser;

function describeUser(user: User): string {
  if (user.plan === "free") {
    // Narrowed to FreeUser
    return `User ${user.id} on FREE plan`;
  }
  // Narrowed to PaidUser here
  return `User ${user.id} on ${user.plan.toUpperCase()} plan ${
    user.seats ? ` (${user.seats} seats)` : ""
  }`;
}

const u1: User = { id: "1", plan: "free" };
const u2: User = { id: "2", plan: "pro", seats: 3 };

console.log(describeUser(u1));
console.log(describeUser(u2));
