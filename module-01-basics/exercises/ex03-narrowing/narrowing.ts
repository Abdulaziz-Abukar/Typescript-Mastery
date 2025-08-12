type PaidUser = { id: string; plan: "pro" | "team"; seats?: number };
type FreeUser = { id: string; plan: "free" };

type User = PaidUser | FreeUser;

function describeUser(user: User): string {
  if (user.plan === "free") {
    return `User ${user.id} on FREE plan`;
  }

  return `User ${user.id} on ${user.plan.toUpperCase()} plan${
    user.seats ? ` (${user.seats} seats)` : ""
  }`;
}

function canCreateProject(user: User): boolean {
  return user.plan !== "free";
}

function ensureSeats(user: User): number {
  if (user.plan === "free") return 0;

  return user.seats ?? 1; // 0 stays 0, undefined becomes 1;
}
