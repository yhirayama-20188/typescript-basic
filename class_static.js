"use strict";
var StaticSomething = /** @class */ (function () {
    function StaticSomething() {
        StaticSomething.instances++;
    }
    StaticSomething.instances = 0;
    return StaticSomething;
}());
var s1 = new StaticSomething();
var s2 = new StaticSomething();
console.log(StaticSomething.instances);
