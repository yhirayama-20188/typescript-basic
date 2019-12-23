function outerFunction(arg: string) {
  var variableInOuterFunction = arg;

  function bar() {
    console.log(variableInOuterFunction)
  }

  bar()
}
outerFunction("hello closure"); // logs hello closure!

function outerFunction02(arg: string) {
  var variableInOuterFunction = arg;
  return function() {
    console.log(variableInOuterFunction);
  }
}

var innerFunction = outerFunction("hello closure");

// オブジェクトを簡単に作成することができます。リビーリングモジュールパターン(revealing module pattern)：
function createCounter() {
  let val = 0;
  return {
    increment() { val++ },
    getVal() { return val }
  }
}

let counter = createCounter();
counter.increment();
console.log(counter.getVal());
counter.increment();
console.log(counter.getVal());