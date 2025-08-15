interface PaginatedResponse<T> {
  items: T[];
  total: number;
}

type User = { id: number; username: string };

const myUser: User = { id: 5, username: "bushido" };

const paginatedResponse: PaginatedResponse<User> = {
  items: [myUser],
  total: 1,
};

console.log(paginatedResponse);
