"use strict";
// 変数がglobalレベルで定義されているかどうかを確認するには、通常、typeofを使用します：
var someglobal = '123';
if (typeof someglobal !== 'undefined') {
    // someglobal is now safe to use
    console.log(someglobal);
}
// 省略可能
// 良くない例
function foo01() {
    // if Something
    return { a: 1, b: 2 };
    // else
    return { a: 1, b: undefined };
}
// 良い例
function foo02() {
    // if Something
    return { a: 1, b: 2 };
    // else
    return { a: 1 };
}
// 有効性(validity)の意味でundefinedを使用しない
// "undefined"かどうかを判定しない
// 良くない例
function toInt01(str) {
    return str ? parseInt(str) : undefined;
}
// はるかに良い例
function toInt02(str) {
    var int = parseInt(str);
    if (isNaN(int)) {
        return { valid: false };
    }
    else {
        return { valid: true, int: int };
    }
}
