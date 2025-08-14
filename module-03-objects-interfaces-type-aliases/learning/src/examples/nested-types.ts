interface Address {
  street: string;
  city: string;
}

interface User {
  name: string;
  address: Address;
}

const u2: User = {
  name: "Abdulaziz",
  address: {
    street: "124 Main St",
    city: "Calgary",
  },
};

console.log(u2);
