type Circle = { kind: "circle"; radius: number };
type Rectangle = { kind: "rectangle"; width: number; height: number };
type Shape = Circle | Rectangle;

function area(shape: Shape): number {
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  }

  return Math.PI * Math.pow(shape.radius, 2);
}
const myCircle: Shape = {
  kind: "circle",
  radius: 15,
};

const myRectangle: Shape = {
  kind: "rectangle",
  width: 5,
  height: 5,
};

console.log(area(myCircle));
console.log(area(myRectangle));
