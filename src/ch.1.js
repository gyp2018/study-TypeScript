/**
 * Basic Types
 */
// Boolean
var isDone = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// String
var color = "blue";
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + "\n\nI'll be " + (age + 1) + " years old next month.";
// Array
var list = [1, 2, 3];
// Generic array type
// let list: Array<number> = [1, 2, 3];
// Tuple
var x;
x = ["hello", 10]; // OK
x = [10, "hello"]; // Error
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error
x[3] = "world"; // OK
console.log(x[5].toString()); // OK
x[6] = true; // Error
// Enum
// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;
// enum Color {Red = 1, Green, Blue}
// let c: Color = Color.Green;
// enum Color {Red = 1, Green = 2, Blue = 4}
// let c: Color = Color.Green;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
var prettySure = 4;
