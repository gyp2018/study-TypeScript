/**
 * Basic Types
 */

// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }

I'll be ${ age + 1 } years old next month.`;

// Array
let list: number[] = [1, 2, 3];

// Generic array type
// let list: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error

x[3] = "world"; // OK
console.log(x[5].toString()); // OK
// x[6] = true; // Error

// Enum
// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;

// enum Color {Red = 1, Green, Blue}
// let c: Color = Color.Green;

// enum Color {Red = 1, Green = 2, Blue = 4}
// let c: Color = Color.Green;

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;


let prettySure: Object = 4;
