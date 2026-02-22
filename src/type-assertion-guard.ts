// type assertion

let somevalue: unknown = 'Hello there ';
let strlenght: number = somevalue.length;
// this is will not show beause type is unknown
let againStrLength: number = (somevalue as string).length;
// this will work
let newagainStrLength: number = (<string>somevalue).length;
// this is one more way

//type guard

function procesValue(value: string | number) {
  // ts is smart enough know this value can be string only all this method of string
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else {
    // only can have a number vakue
    console.log(value.toFixed(2));
  }
}

//instance of type guard
class Dog {
  bark() {
    console.log('BHOOO');
  }
}

class Cat {
  meow() {
    console.log('meuu');
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
