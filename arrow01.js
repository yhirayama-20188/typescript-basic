"use strict";
// function Person(age: number) {
//   this.age = age;
//   this.growOld = () => {
//     this.age++;
//   }
// }
// var person = new Person(1);
// setTimeout(person.growOld, 1000);
// setTimeout(function () { console.log(person.age); }, 2000); // 1, should have been 2
var Person02 = /** @class */ (function () {
    function Person02(age) {
        var _this = this;
        this.age = age;
        this.growOld = function () {
            _this.age++;
        };
    }
    return Person02;
}());
var person = new Person02(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000);
