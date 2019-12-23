"use strict";
if (123) { // Will be treated like `true`
    console.log('Any number other than 0 is truthy');
}
// 明示的に逆の逆をしてtrueの値をもたせる
// Direct variables
var hasName = !!name;
// As members of objects
var someObj = {
    hasName: !!name
};
// e.g. in ReactJS JSX
// { !!someName && <div>{ someName } < /div>}
