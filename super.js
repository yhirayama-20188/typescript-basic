"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangle = /** @class */ (function () {
    function Rectangle(name, height, width) {
        this.name = 'Rectangle';
        this.height = height;
        this.width = width;
    }
    Rectangle.prototype.sayName = function () {
        console.log('Hi, I am a ', this.name + '.');
    };
    Object.defineProperty(Rectangle.prototype, "area", {
        get: function () {
            return this.height * this.width;
        },
        set: function (value) {
            this.height = this.width = Math.sqrt(value);
        },
        enumerable: true,
        configurable: true
    });
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(length) {
        var _this = this;
        console.log(_this.height); // ReferenceError superが必要
        _this = _super.call(this, name, length, length) || this;
        // Note: 'this' を使う前に super() をコールしなければなりません。
        // でないと reference error になります。
        _this.name = 'Square';
        console.log(_this.name);
        return _this;
    }
    return Square;
}(Rectangle));
var test = new Rectangle('Rectangle02', 10, 20);
// console.log(test);
// console.log(test.sayName());
console.log(Square);
