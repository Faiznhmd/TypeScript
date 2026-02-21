// type

// type vs interface

// InterFace

// 1. interface can be extend but type alias can not

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let Animal: Dog = {
  name: 'Alsa',
  breed: 'common',
};

//2. interface can be declared multiple times and will merge
// created interface animal two times this has resulted in one interface having both name and age
interface animal {
  name: string;
}
interface animal {
  age: number;
}

let ans = {
  name: 'owwooo',
  age: 10,
};

// use interafce for object shapes
// use type for union / intersections
