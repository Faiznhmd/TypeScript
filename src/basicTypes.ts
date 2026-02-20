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

let FavColor: Color = Color.Blue;
// what is it so so either if you choose blue red green

//Any

let randoomvalue: any = 10;
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
