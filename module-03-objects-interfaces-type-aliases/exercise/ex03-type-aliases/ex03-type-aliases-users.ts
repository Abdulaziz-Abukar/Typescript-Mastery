type ID = string | number;
type BasicUser = { id: ID; name: string };
type PremiumUser = BasicUser & { subscription: "gold" | "platnium" };

const id1: ID = 25;
const id2: ID = 55;
const id3: ID = 12;
const myBasicUser: BasicUser = { id: id1, name: "Abdulaziz" };
const myPremiumUser: PremiumUser = {
  id: id2,
  name: "Bob",
  subscription: "gold",
};
const myPremiumUser2: PremiumUser = {
  id: id3,
  name: "Ken",
  subscription: "platnium",
};

console.log(myBasicUser, myPremiumUser, myPremiumUser2);
