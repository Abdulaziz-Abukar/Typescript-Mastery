class Stack<T> {
  private contents: T[] = [];
  constructor(initial: Iterable<T> = []) {
    this.contents = Array.from(initial);
  }

  push(item: T): void {
    this.contents.push(item);
  }

  pop(): T | undefined {
    if (this.contents.length === 0) return undefined;

    return this.contents.pop();
  }

  peek(): T | undefined {
    return this.contents[this.contents.length - 1];
  }

  size(): number {
    return this.contents.length;
  }
}

const myStack = new Stack<number>([10, 9]);

myStack.push(1);
myStack.push(2);
console.log("My Stack", myStack);
console.log("size: ", myStack.size());
console.log("Popped", myStack.pop());
console.log("My Stack", myStack);
console.log("size: ", myStack.size());
myStack.push(5);
console.log("Peeking", myStack.peek());
console.log("size: ", myStack.size());
console.log("My Stack", myStack);
