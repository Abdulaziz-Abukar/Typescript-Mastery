type Point2D = [x: number, y: number];

function distance(a: Point2D, b: Point2D): number {
  const dx = a[0] - b[0];
  const dy = a[0] - b[1];
  return Math.sqrt(dx * dx + dy * dy);
}

const p1: Point2D = [0, 0];
const p2: Point2D = [3, 4];

console.log(distance(p1, p2)); // 5
