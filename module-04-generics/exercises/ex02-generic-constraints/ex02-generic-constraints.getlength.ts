function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength(["2", "d", "cd", "cbv", "ddd"]));
console.log(getLength("1234"));
console.log(getLength([555, 2, 4, 2]));
