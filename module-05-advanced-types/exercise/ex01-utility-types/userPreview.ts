/*
Given:
interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
};

Create a UserPreview type using Pick that includes only id and name. Make a variable of that type and assign example data.
 */

interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

type UserPreview = Pick<User, "id" | "name">;

const preview: UserPreview = { id: 3, name: "abdulaziz" };

console.log(preview);
