// function identity(arg: any) {
//   return arg;
// }

// let output1 = identity('hello');
// let output2 = identity(100);

// we are returning stirng in the args on outpuut1 then ts is not smart enough that and show any type
// this is where generic come in picture

// lets write a new code to understand what is coming to the code to show what we are showing

function identity<mytype>(arg: mytype): mytype {
  return arg;
}

let output1 = identity('hello');
let output2 = identity(100);
// this is where we get a return type

// 1> generic with arrays

function getFirstElement<T>(arg: T[]): T | undefined {
  return arg[0];
}

let outputNo = getFirstElement([1, 2, 3]);
let outputstr = getFirstElement(['hi', 'helo', 'new']);

// 2> generic interfaces
// generic classes
// generic constraints
