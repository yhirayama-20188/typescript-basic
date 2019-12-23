class Adder {
  constructor(public a: number) {}
  add = (b: number): number => {
    return this.a + b;
  }
}

class Child extends Adder {
  callAdd(b: number) {
    return this.add(b);
  }
}
// Demo
const child = new Child(123);
console.log(child.callAdd(123));

// callAddを呼ぶ
// →this.addを呼ぶ
// return this.a + b

// WRONG WAY TO DO IT
// var foo = () => {
//   bar: 123
// }

// Correct 🌹
var foo = () => ({
  bar: 123
});