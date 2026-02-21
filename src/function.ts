// what this function is do  both parameter is assingable to number and return a number
function addNO(a: number, b: number): number {
  return a + b;
}

//default parameters

function defaultParameters(a: number, b: number = 1): number {
  return a * b;
}

//arrow function
const arrow = (a: number, b: number): number => a / b;
