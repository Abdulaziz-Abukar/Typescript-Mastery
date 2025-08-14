// Type alias for an object
type User = { name: string; age: number };

// Type alias for a union
type ID = string | number;

// Intersection
type Person = { name: string };
type Employee = { role: string };
type StaffMember = Person & Employee;

const staff: StaffMember = {
  name: "Vegeta",
  role: "Prince of All Saiyans",
};
console.log(staff);
