// function Person(age: number) {
//   this.age = age;
//   this.growOld = () => {
//     this.age++;
//   }
// }

// var person = new Person(1);
// setTimeout(person.growOld, 1000);

// setTimeout(function () { console.log(person.age); }, 2000); // 1, should have been 2


class Person02 {
  constructor(public age:number) {}
  growOld = () => {
    this.age++;
  }
}

var person = new Person02(1);
setTimeout(person.growOld, 1000);

setTimeout(function() { console.log(person.age) }, 2000);

