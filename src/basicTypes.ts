//Primitive

let username: string = 'Typescript';
let age: number = 10;
let isAdmin: boolean = true;

//Arrays

let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ['hlo', 'yup'];

//Tuples
let person: [string, number] = ['Faizan', 8];

//enums

enum Color {
  Red,
  Blue,
  Green,
}

let FavColor: Color = Color.Red;
// what is it  so either if you choose blue red green
// this is only take red blue green

//Any(you have to avoid it "avoid when possible")
// this take all value
let randoomvalue: any;
randoomvalue = 10;
randoomvalue = 'hlo';
randoomvalue = true;

//unknown(safer than any)

let someValue: unknown = 10;
someValue = 'hi there';
someValue = true;

//function

//(Void) for function that do not return anything
function subscribe(message: string): void {
  console.log(message);
}

//type inference
// typescript automatically knows what is the type of variable
let ex = 'THIS IS AN EXAMPLE';
let agianEX = true;
