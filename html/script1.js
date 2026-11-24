// console.log("file connected");
// const str = "JavaScript";
// console.log(str[0]);
// console.log(str.at(0));
// console.log(str.charCodeAt(1));

// let str = "Hello";

// console.log(str[0]);           // H
// console.log(str.at(0));        // H
// console.log(str.charCodeAt(1)); // 101

// let str = "5";

// console.log(str.padStart(3, "0")); // 005

// const prompt = require("prompt-sync")();

// var age = Number(prompt("Enter the age: "));

// if(age>=18){
//     console.log("able to vote");
// }
// else{
//     console.log("not able to vote")
// }


console.log("file connected");

// Variables
let user = "raj";
var username = "elon";
const price = 9000;
let num = 10;

console.log(user, username, price, num);

// var keyword
// var is function-scoped and can be redeclared and reassigned.
// var variables are hoisted and initialized with undefined.

console.log(username);
username = "updated data";
console.log(username);

function sum() {
    console.log(username);

    var innerusername = "function";
    console.log(innerusername);
}

sum();

// innerusername cannot be accessed outside the function.

// Redeclaration is allowed with var
var username = "newusername";
console.log(username);

// let keyword
// let is block-scoped.
// It can be reassigned but cannot be redeclared
// in the same scope.

// Correct declaration before use
let client = "hello";
console.log(client);

// Block scope example
{
    let innervariable = "innerdata";
    console.log(innervariable);
}

// innervariable cannot be accessed outside this block.

// Reassignment is allowed with let
client = "newdata";
console.log(client);

// Redeclaration in the same scope is not allowed:
// let client = "again declare"; // Error!

// const keyword
// const is block-scoped.
// It cannot be reassigned or redeclared
// in the same scope.

// const example
const country = "India";
console.log(country);

// Variable naming rules:
// 1. Cannot start with a number.
// 2. Cannot contain spaces.
// 3. Only letters, numbers, _ and $ are allowed.
// 4. Reserved keywords cannot be used as variable names.

// Invalid example:
// let 1a = "raj"; // SyntaxError!

// Data types
// Primitive: string, number, boolean, bigint,
// null, undefined, symbol.

// Non-primitive: object, array, function.

let name = "Deepu";
let age = 20;
let isStudent = true;
let value = null;
let result;
let bigNumber = 12345678901234567890n;
let uniqueId = Symbol("id");

console.log(name);
console.log(age);
console.log(isStudent);
console.log(value);
console.log(result);
console.log(bigNumber);
console.log(uniqueId);

let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);

let student = {
    name: "Deepu",
    age: 20
};
console.log(student);

function greet() {
    console.log("Hello JavaScript!");
}
greet();
