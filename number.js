"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true!
console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2); // true!
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992 -> Correct
console.log(Number.MAX_SAFE_INTEGER + 2); // 9007199254740992 -> Rounded!
console.log(Number.MAX_SAFE_INTEGER + 3); // 9007199254740994 -> Rounded - correct by luck
console.log(Number.MAX_SAFE_INTEGER + 4); // 9007199254740996 - Rounded!
// Safe value
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
// Unsafe value
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false
// Because it might have been rounded to it due to overflow
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 10)); // false
// big.js
// 任意の精度で整数を表すことができます。
var big_js_1 = require("big.js");
exports.foo = new big_js_1.Big('111.11111111111111111111');
exports.bar = exports.foo.plus(new big_js_1.Big('0.00000000000000000001'));
// To get a number:
var x = Number(exports.bar.toString()); // 少数点以下の精度を失う
// 無限 infinity
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(-Number.MAX_VALUE); // -1.7976931348623157e+308
console.log(Number.MAX_VALUE + 1);
