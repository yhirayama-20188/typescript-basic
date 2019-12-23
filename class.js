"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function foo() {
    var someProperty;
    // Some other initialization code
    function someMethod() {
        //  Do some stuff with 'someProperty'
        // And potentially other things
    }
    // Maybe some other methods
    return {
        someMethod: someMethod,
    };
}
// 良くない例
var someProperty;
function foo_bad() {
}
foo_bad(); // 
someProperty = 123; // some more initialization
function someMethod() {
}
exports.someMethod = someMethod;
// 良い例
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.someMethod = function () {
    };
    Foo.prototype.someUtility = function () {
    };
    return Foo;
}());
// export = new Foo();
// import { foo } from "./foo";
