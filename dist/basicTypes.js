"use strict";
//Arrays
let numbers = [1, 2, 3, 4];
let names = ['hlo', 'yup'];
//Tuples
let person = ['Faizan', 8];
//enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
let FavColor = Color.Blue;
// what is it so so either if you choose blue red green
//Any
let randoomvalue = 10;
randoomvalue = 'hlo';
randoomvalue = true;
//unknown(safer than any)
let someValue = 10;
someValue = 'hi there';
someValue = true;
//function
//(Void) for function that do not return anything
function subscribe(message) {
    console.log(message);
}
