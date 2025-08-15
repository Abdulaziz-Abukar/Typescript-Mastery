/*
    Create a type ElementType<T> that returns the element type if T is an array, otherwise T itself.
*/

type ElementType<T> = T extends (infer U)[] ? U : T;

let arrElement: ElementType<number[]> = 1; // type is number
let numElement: ElementType<number> = 1;
console.log(arrElement);
console.log(numElement);
