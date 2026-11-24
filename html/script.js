console.log("file connected");

// variable declarations
const user = "raj";
const price = 9000;
const num = 10;

console.log("user:", user);
console.log("price:", price);
console.log("num:", num);

// var keyword: oldest keyword, function-scoped and hoisted
var username = "elon";
console.log("username:", username);

function sum() {
    console.log("username inside function:", username);
    var innerUsername = "function";
    console.log("innerUsername:", innerUsername);
}

sum();

username = "updated data";
console.log("updated username:", username);

var username = "newusername";
console.log("redeclared username:", username);

// let keyword: block-scoped, hoisted but in TDZ before declaration
let client = "hello";
console.log("client:", client);

{
    let innerVariable = "innerdata";
    console.log("innerVariable:", innerVariable);
}

client = "newdata";
console.log("updated client:", client);

// const keyword: block-scoped, cannot be reassigned or redeclared
const rate = 0.18;
console.log("rate:", rate);

// variable naming rules
// - cannot start with a number
// - do not use special characters except _ and $
// - do not use spaces between variable names
// - do not use reserved keywords

// data types
// primitive: string, number, boolean, BigInt, null, undefined, symbol
// non-primitive: array, object, function

const exampleString = "JavaScript";
console.log("exampleString[0]:", exampleString[0]);
console.log("exampleString.at(0):", exampleString.at(0));
console.log("exampleString.charCodeAt(1):", exampleString.charCodeAt(1));
