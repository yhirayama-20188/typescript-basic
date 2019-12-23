class Rectangle {
  name: string;
  height: number;
  width: number;
  constructor(name: string, height: number, width: number) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }

  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area (value) {
    this.height = this.width = Math.sqrt(value);
  }
}

class Square extends Rectangle {
  constructor(length: number) {
    console.log(this.height); // ReferenceError superが必要
    super(name, length, length);

    // Note: 'this' を使う前に super() をコールしなければなりません。
    // でないと reference error になります。
    this.name = 'Square'
    console.log(this.name);
  }
}

var test = new Rectangle('Rectangle02', 10, 20);
// console.log(test);
// console.log(test.sayName());
console.log(Square);