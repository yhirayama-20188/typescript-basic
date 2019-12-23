function foo() {
  let someProperty;

  // Some other initialization code

  function someMethod() {
    //  Do some stuff with 'someProperty'
    // And potentially other things
  }

  // Maybe some other methods

  return {
    someMethod,
    // maybe some other method
  }
}


// 良くない例
let someProperty;

function foo_bad() {
}
foo_bad(); // 

someProperty = 123; // some more initialization

export function someMethod() {
}


// 良い例
class Foo {
  public someProperty: any;
  
  constructor() {
  }

  public someMethod() {
  }

  private someUtility() {
  }
}

// export = new Foo();
// import { foo } from "./foo";