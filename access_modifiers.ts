class FooBase {
  public x: number;
  private y: number;
  protected z: number;
}

// EFFECT ON INSTANCES
var foo = new FooBase();
console.log(foo.x); // access ok
console.log(foo.y); // access error
console.log(foo.z); // access error


// EFFECT ON CHILD CLASSES
class FooChild extends FooBase {
  constructor() {
    super();
    this.x; // access ok
    this.y; // access error
    this.z; // access ok
  }
}