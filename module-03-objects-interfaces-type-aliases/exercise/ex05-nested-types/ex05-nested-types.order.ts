interface Address {
  street: string;
  city: string;
  postalCode: string;
}

interface Order {
  id: string;
  total: number;
  shippingAddress: Address;
}

const myOrder: Order = {
  id: "u_124",
  total: 5,
  shippingAddress: {
    street: "124 Main St",
    city: "Calgary",
    postalCode: "2451f",
  },
};

console.log(myOrder);
