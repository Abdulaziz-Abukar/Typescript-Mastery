class Box<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }
}

const stringBox = new Box<string>("Hello");
const numberBox = new Box<number>(1);
console.log(stringBox, numberBox);
