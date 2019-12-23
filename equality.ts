console.log({ a: 123 } == { a: 123 }); // False
console.log({ a: 123 } === { a: 123 }); // False
// if ({ a: 123 } == { a: 123 }) return true else return false;
// if ({ a: 123 } === { a: 123 }) return true else return false;

// import * as deepEqual from "deep-equal";
// console.log(deepEqual({ a: 123 }, { a: 123 }));

type idDisplay = {
  id: string,
  display: string
}
const list: idDisplay[] = [
  {
    id: 'foo',
    display: 'Foo Select'
  },
  {
    id: 'bar',
    display: 'Bar Select'
  },
]

const fooIndex = list.map(i => i.id).indexOf('bar');
console.log(fooIndex);