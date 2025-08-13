type Admin = { role: "admin"; id: string; permissions: string[] };
type Member = { role: "member"; id: string; expiresAt?: Date };
type Account = Admin | Member;

function isAdmin(a: Account): a is Admin {
  return a.role === "admin";
}

function canAccessSettings(a: Account): boolean {
  return isAdmin(a);
}

function getExpiry(a: Account): Date | null {
  if (isAdmin(a)) return null;

  return a.expiresAt ?? null;
}

const abdulaziz: Admin = {
  role: "admin",
  id: "41241",
  permissions: ["read", "write", "access"],
};
const hassan: Member = {
  role: "member",
  id: "12412",
  expiresAt: new Date(),
};

const mike: Member = {
  role: "member",
  id: "12412",
};
console.log(getExpiry(abdulaziz));
console.log(getExpiry(hassan));
