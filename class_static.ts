class StaticSomething {
  static instances = 0;
  constructor() {
    StaticSomething.instances++;
  }
}

var s1 = new StaticSomething();
var s2 = new StaticSomething();

console.log(StaticSomething.instances);