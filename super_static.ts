class Rectangle02 {
  constructor() {}
  static logNbSides() {
    return 'I have 4 sides';
  }
}

class Square02 extends Rectangle02 {
  constructor() {
    super();
  }
  static logDescription() {
    return super.logNbSides() + 'which are all equal'
  }
}

console.log(Square02.logDescription());