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
var Rectangle02 = /** @class */ (function () {
    function Rectangle02() {
    }
    Rectangle02.logNbSides = function () {
        return 'I have 4 sides';
    };
    return Rectangle02;
}());
var Square02 = /** @class */ (function (_super) {
    __extends(Square02, _super);
    function Square02() {
        return _super.call(this) || this;
    }
    Square02.logDescription = function () {
        return _super.logNbSides.call(this) + 'which are all equal';
    };
    return Square02;
}(Rectangle02));
console.log(Square02.logDescription());
