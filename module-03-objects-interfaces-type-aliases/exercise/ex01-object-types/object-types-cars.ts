let oldCar: { make: string; model: string; year: number; color?: string } = {
  make: "pontiac",
  model: "g6",
  year: 2006,
  color: "Black",
};

let myCar: { make: string; model: string; year: number; color?: string } = {
  make: "hyundai",
  model: "ioniq",
  year: 2018,
};

// function printCar(car): string {
//   return ` ${car.year} ${car.make} ${car.model} ${car.color ?? "Unknown color"};
//     `;
// }

// console.log(printCar(oldCar));
// console.log(printCar(myCar));
