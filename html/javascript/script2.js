// // // // // // // //help us to prevent small production level error , detect here and resolve it in development so that we cannot face any error in production code.
// // // // // // // 'use strict'
// // // // // // // p = 10;
// // // // // // // console.log(p);

// // // // // // // function sum(a, a) {
// // // // // // //     console.log(a + a)
// // // // // // // }
// // // // // // // sum(33, 44);


// // // // // // // // // // // // // // console.log("file connected")

// // // // // // // // // // // // // // // variable
// // // // // // // // // // // // // // let  user = "raj";
// // // // // // // // // // // // // // // var  username  = "elon";
// // // // // // // // // // // // // // const price = 9000;
// // // // // // // // // // // // // // num = 10;
// // // // // // // // // // // // // // // console.log(user ,username , price ,num )

// // // // // // // // // // // // // // //  var keyword/:- this keyword is oldest keyword ,
// // // // // // // // // // // // // // // its globally scoped and functional scope variable
// // // // // // // // // // // // // // //reassignment and redeclration is possible in this
// // // // // // // // // // // // // // // keyword
// // // // // // // // // // // // // // //hoisting :- this process change the declration of the varibale to top of the file.


// // // // // // // // // // // // // // console.log(username);
// // // // // // // // // // // // // // var  username  = "elon";
// // // // // // // // // // // // // // console.log(username);
// // // // // // // // // // // // // // function sum(){
// // // // // // // // // // // // // //     console.log(username);
// // // // // // // // // // // // // //     var innerusername = "function";//this variable is not accessible outside the functiuon because of functional scoped.
// // // // // // // // // // // // // //     console.log(innerusername)
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // sum();
// // // // // // // // // // // // // // // console.log(innerusername);//it gives us error of not defined becuase of defined inside the func

// // // // // // // // // // // // // // username = "updated data";//reassignment
// // // // // // // // // // // // // // console.log(username);

// // // // // // // // // // // // // // var username  = "newusername";//redeclration
// // // // // // // // // // // // // // console.log(username);

// // // // // // // // // // // // // // // let keyword :- added in javascript in 2015 in es6 update.it declare blocked scoped variable
// // // // // // // // // // // // // // console.log(client);
// // // // // // // // // // // // // // let client = "hello";
// // // // // // // // // // // // // // console.log(client);
// // // // // // // // // // // // // // {
// // // // // // // // // // // // // //     let innervariable = "innerdata"
// // // // // // // // // // // // // //     console.log(innervariable);
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // console.log(innervariable);
// // // // // // // // // // // // // // //it gives us error

// // // // // // // // // // // // // // //reassigment is possible in let keyword
// // // // // // // // // // // // // //  client = "newdata";
// // // // // // // // // // // // // //  console.log(client);

// // // // // // // // // // // // // //  //redeclaration is not possible in let keyword

// // // // // // // // // // // // // // //  let client = "again declare";
// // // // // // // // // // // // // //  //it gives us error .because blocked scoped variables are not redeclare .


// // // // // // // // // // // // // // //  const keyword :- added in es6 2015 , blocked scoped variable , reassignment and redeclaration is not possible in this keyword


// // // // // // // // // // // // // // // vairbale  name selection rules
// // // // // // // // // // // // // // //  cannot start with numberical value.
// // // // // // // // // // // // // // // do not use any special charchter except _ and $ ,
// // // // // // // // // // // // // // // do not use any space btw variable name.
// // // // // // // // // // // // // // // do not use  any reserved keyword

// // // // // // // // // // // // // // // data types
// // // // // // // // // // // // // // // primitive and non primitive data types

// // // // // // // // // // // // // // // primitive are
// // // // // // // // // // // // // // // string , number ,boolean,BigInt ,null ,undefined, symbol

// // // // // // // // // // // // // // // non primitive :-
// // // // // // // // // // // // // // //array , object, function,

// // // // // // // // // // // // // // // let 1a = "raj"
// // // // // // // // // // // // // // //13 oct topics
// // // // // // // // // // // // // // // topics  :- Operator , , Scope , Type Conversion , Math Object , Boolean , Comparsion , String  Implicit cericion , Explicit conversion.

// // // // // // // // // // // // // // //2nd class :- If , else-if ,else if ladder ,Nested if , Switch, For , While ,Do while , for of ,for In, nestedloop.

// // // // // // // // // // // // // // // scope
// // // // // // // // // // // // // // // /1 Global scope
// // // // // // // // // // // // // // // we can declare variable anywhere in the file and can access to any part of the file ,outside any block.

// // // // // // // // // // // // // // // functional scope:- when any variable is declared inside any function then ,we can access it outside that block

// // // // // // // // // // // // // // //block scope:- when any variable is declared inside any block then we can not access it outside that block.

// // // // // // // // // // // // // // // operators :-
// // // // // // // // // // // // // // // arithmatic operator:- +,- ,*,/, ** ,%
// // // // // // // // // // // // // let a = 10;
// // // // // // // // // // // // // let b = 20;
// // // // // // // // // // // // // console.log(a + b);
// // // // // // // // // // // // // console.log(10 + "10")//1010
// // // // // // // // // // // // // console.log(10 + "sdv")//NaN
// // // // // // // // // // // // // console.log(10 - 10)
// // // // // // // // // // // // // console.log(a ** b)
// // // // // // // // // // // // // console.log(a % b);


// // // // // // // // // // // // // // comparison
// // // // // // // // // // // // // // < , >,<=,>=,== ,=== ,!= ,!==
// // // // // // // // // // // // // console.log(10 == "10")
// // // // // // // // // // // // // console.log(10 === "10");
// // // // // // // // // // // // // // ==  it only compare the values
// // // // // // // // // // // // // //=== :- it compare both the values and data types
// // // // // // // // // // // // // console.log(10 != '10');
// // // // // // // // // // // // // console.log(10 !== "10");

// // // // // // // // // // // // // // assignment operator
// // // // // // // // // // // // // // =,+=, -= ,**= ,%= ,/= ,++ ,--
// // // // // // // // // // // // // let x = 10;
// // // // // // // // // // // // // x += 10;//x = x +10;
// // // // // // // // // // // // // x -= 10;//x = x -10;
// // // // // // // // // // // // // x *= 10;//x = x *10;
// // // // // // // // // // // // // x /= 10;//x = x /10;
// // // // // // // // // // // // // x **= 10;//x = x **10;
// // // // // // // // // // // // // console.log(x);

// // // // // // // // // // // // // // increment++ and decrement --
// // // // // // // // // // // // // let p = 10;
// // // // // // // // // // // // // // pre increment :- first increment then print/use
// // // // // // // // // // // // // //post increment :- first print/use then increment
// // // // // // // // // // // // // // p++ ;
// // // // // // // // // // // // // console.log(p++);//10
// // // // // // // // // // // // // console.log(p);//11
// // // // // // // // // // // // // console.log(p + p++);

// // // // // // // // // // // // // // pre decrement :- first decrement then print/use
// // // // // // // // // // // // // //post decrement :- first print/use then decrement
// // // // // // // // // // // // // let y = 10;
// // // // // // // // // // // // // // y--
// // // // // // // // // // // // // console.log(y--);
// // // // // // // // // // // // // console.log(y);

// // // // // // // // // // // // // console.log(y-- + --y);

// // // // // // // // // // // // // // logical operator
// // // // // // // // // // // // // // &&  ,|| ,!
// // // // // // // // // // // // // console.log(true && true) //true
// // // // // // // // // // // // // console.log(true && false) //false
// // // // // // // // // // // // // console.log(false && true) //false
// // // // // // // // // // // // // console.log(false && false) //false

// // // // // // // // // // // // // console.log(true && "hello");
// // // // // // // // // // // // // console.log(false && "hello");

// // // // // // // // // // // // // console.log(true || true) //true
// // // // // // // // // // // // // console.log(true || false) //true
// // // // // // // // // // // // // console.log(false || true) //true
// // // // // // // // // // // // // console.log(false || false) //false

// // // // // // // // // // // // // console.log(true || "hello");//true
// // // // // // // // // // // // // console.log(false || "hello");//hello

// // // // // // // // // // // // // console.log(!true)
// // // // // // // // // // // // // console.log(!false)
// // // // // // // // // // // // // console.log(!0)
// // // // // // // // // // // // // console.log(!1)
// // // // // // // // // // // // // console.log(!"")
// // // // // // // // // // // // // console.log(!" ")
// // // // // // // // // // // // // console.log(!null)
// // // // // // // // // // // // // console.log(!undefined)

// // // // // // // // // // // // // // Math Object :
// // // // // // // // // // // // // console.log(Math.random() * 99999)
// // // // // // // // // // // // // console.log(Math.round(1.6))
// // // // // // // // // // // // // console.log(Math.floor(10.9))
// // // // // // // // // // // // // console.log(Math.abs(-10));
// // // // // // // // // // // // // console.log(Math.trunc(4.3))
// // // // // // // // // // // // // console.log(Math.ceil(2.1));
// // // // // // // // // // // // // console.log(Math.sqrt(144))
// // // // // // // // // // // // // console.log(Math.SQRT2)
// // // // // // // // // // // // // console.log(Math.pow(2, 3))
// // // // // // // // // // // // // console.log(Math.PI)
// // // // // // // // // // // // // console.log(Math.min(12, 1, 3, 1,))
// // // // // // // // // // // // // console.log(Math.max(1, 2, 3, 2, 3, 2))
// // // // // // // // // // // // //     ;

// // // // // // // // // // // // // // type coversion :-
// // // // // // // // // // // // // // Implicit cerison
// // // // // // // // // // // // // //explicit  conversion
// // // // // // // // // // // // // console.log(10 - "10")//it convert into number
// // // // // // // // // // // // // console.log(10 + "10")//into string
// // // // // // // // // // // // // console.log(10 == "10");


// // // // // // // // // // // // // // explicit conversion
// // // // // // // // // // // // // // Number , String ,Boolean
// // // // // // // // // // // // // console.log(Number("354"))
// // // // // // // // // // // // // console.log(Number("dfbsdf"));
// // // // // // // // // // // // // console.log(Boolean("hello"));
// // // // // // // // // // // // // console.log(Boolean(null))
// // // // // // // // // // // // // console.log(Boolean(undefined));
// // // // // // // // // // // // // console.log(String(88));
// // // // // // // // // // // // // console.log(String(true));
// // // // // // // // // // // // // console.log(String([1, 2, 3]));

// // // // // // // // // // // // // // string
// // // // // // // // // // // // // // "dffdsj" 'sdhhd' ,`kjvsf`;
// // // // // // // // // // // // // console.log('object')

// // // // // // // // // // // // // let str = "javascript";
// // // // // // // // // // // // // // string methods
// // // // // // // // // // // // // console.log(str[0]);
// // // // // // // // // // // // // console.log(str.at(0))
// // // // // // // // // // // // // console.log(str.charCodeAt(1))//it find the ascci code of the value present at given index.
// // // // // // // // // // // // // console.log(str.charAt(0));
// // // // // // // // // // // // // console.log(str.indexOf("a"));
// // // // // // // // // // // // // console.log(str.lastIndexOf("a"));//-1 when the value is not present
// // // // // // // // // // // // // console.log(str.startsWith("java"))
// // // // // // // // // // // // // console.log(str.endsWith("java"))
// // // // // // // // // // // // // console.log(str.includes("java"));
// // // // // // // // // // // // // let data = "hello";
// // // // // // // // // // // // // console.log(data.length)
// // // // // // // // // // // // // console.log(data.trim());
// // // // // // // // // // // // // console.log(data.trimStart());
// // // // // // // // // // // // // console.log(data.trimEnd());
// // // // // // // // // // // // // console.log(data.slice(0, 11))//startindex ,endindex+1 , it copy the give index values;
// // // // // // // // // // // // // console.log(data.substring(0, 11));
// // // // // // // // // // // // // // console.log(data.replace("a","k"));
// // // // // // // // // // // // // console.log(data.replaceAll("a", "k"));
// // // // // // // // // // // // // console.log(data.padEnd(10));
// // // // // // // // // // // // // console.log(data.padStart(10));
// // // // // // // // // // // // // console.log(data.toUpperCase());
// // // // // // // // // // // // // console.log(data.toLowerCase());


// // // // // // // // // // // // // let para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, in?"
// // // // // // // // // // // // // console.log(para.indexOf("dolor"));
// // // // // // // // // // // // // console.log(para.includes("dolor"));
// // // // // // // // // // // // // console.log(para.split("l"));


// // // // // // // // // // // // // // ternary operator
// // // // // // // // // // // // // //  condition ? "true" :"false";
// // // // // // // // // // // // // let check = !true ? "it depend" : " it not depend";
// // // // // // // // // // // // // console.log(check);

// // // // // // // // // // // // // // if , if else , else-if ladder , nested if
// // // // // // // // // // // // // if (true) {
// // // // // // // // // // // // //     console.log("condition is true ")
// // // // // // // // // // // // // }

// // // // // // // // // // // // // if (true) {
// // // // // // // // // // // // //     console.log("condition is true")
// // // // // // // // // // // // // } else {
// // // // // // // // // // // // //     console.log("condition is not true")
// // // // // // // // // // // // // };

// // // // // // // // // // // // // let age = prompt("pls enter your age")
// // // // // // // // // // // // // console.log(Number(age))
// // // // // // // // // // // // // if (age >= 18) {
// // // // // // // // // // // // //     console.log("able to vote")
// // // // // // // // // // // // // } else {
// // // // // // // // // // // // //     console.log("not able to vote")
// // // // // // // // // // // // // };
// // // // // // // // // // // // // //take a number input and print its absolute positive value.
// // // // // // // // // // // // // let f = prompt("enter any number")
// // // // // // // // // // // // // if (f > 0) {
// // // // // // // // // // // // //     console.log(f)
// // // // // // // // // // // // // } else {
// // // // // // // // // // // // //     console.log(-f)
// // // // // // // // // // // // // };

// // // // // // // // // // // // // let a1 = prompt("a1")
// // // // // // // // // // // // // let a2 = prompt("a2")
// // // // // // // // // // // // // if (a1 > a2) {
// // // // // // // // // // // // //     console.log(a1 + " is larger than " + a2)
// // // // // // // // // // // // // } else {
// // // // // // // // // // // // //     console.log(a2 + " is larger than " + a1)
// // // // // // // // // // // // // }

// // // // // // // // // // // // // // else if ladder
// // // // // // // // // // // // // if (true) {
// // // // // // // // // // // // //     console.log('condition first is true')
// // // // // // // // // // // // // } else if (true) {
// // // // // // // // // // // // //     console.log("condition second is true")
// // // // // // // // // // // // // } else if (false) {
// // // // // // // // // // // // //     console.log("condition third is true")
// // // // // // // // // // // // // } else {
// // // // // // // // // // // // //     console.log("all conditions are false")
// // // // // // // // // // // // // }

// // // // // // // // // // // // let p1 = 100;
// // // // // // // // // // // // let p2 = 120;
// // // // // // // // // // // // let p3 = 130;
// // // // // // // // // // // // if (p1 == p2 && p2 == p3 && p3 == p1) {
// // // // // // // // // // // //     console.log("all are equal values");
// // // // // // // // // // // // } else if (p1 > p2 && p1 > p3) {
// // // // // // // // // // // //     console.log(p1 + " is greater than " + p2 + " and " + p3)
// // // // // // // // // // // // } else if (p2 > p1 && p2 > p3) {
// // // // // // // // // // // //     console.log(p2 + " is greater than " + p1 + " and " + p3)
// // // // // // // // // // // // } else {
// // // // // // // // // // // //     console.log(p3 + " is greater than " + p1 + " and " + p2)
// // // // // // // // // // // // }

// // // // // // // // // // // // // check the number is divisible by 5 or 11 , if not divisible then print "not divisible"  and if divisible then print "its divisible";

// // // // // // // // // // // // // nested if
// // // // // // // // // // // // if (true) {
// // // // // // // // // // // //     if (true) {
// // // // // // // // // // // //         if (true) {
// // // // // // // // // // // //             console.log("inner condition is true")
// // // // // // // // // // // //         } else {
// // // // // // // // // // // //             console.log('innner condition is false')
// // // // // // // // // // // //         }
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //         console.log("first inner condition is false")
// // // // // // // // // // // //     }
// // // // // // // // // // // // } else {
// // // // // // // // // // // //     console.log("outsider condition is false");
// // // // // // // // // // // // }


// // // // // // // // // // // // // example of nested if
// // // // // // // // // // // // // let ag = prompt("pls enter your age");
// // // // // // // // // // // // // if(ag >=18){
// // // // // // // // // // // // //    let nationality = prompt("enter your nationality");
// // // // // // // // // // // // //    if(nationality == "indian"){
// // // // // // // // // // // // //       let crime  = confirm("any crime case in past 5 years");
// // // // // // // // // // // // //       if(crime == false){
// // // // // // // // // // // // //         console.log("able to vote")
// // // // // // // // // // // // //       }else{
// // // // // // // // // // // // //         console.log("not able to vote because of crime case")
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //    }else{
// // // // // // // // // // // // //     console.log("nationality is not equal to indian")
// // // // // // // // // // // // //    }
// // // // // // // // // // // // // }else{
// // // // // // // // // // // // //     console.log("not able to vote")
// // // // // // // // // // // // // }

// // // // // // // // // // // // // switch
// // // // // // // // // // // // let statement = "statement4";
// // // // // // // // // // // // switch (statement) {
// // // // // // // // // // // //     case "statement1": console.log("statement 1 is true"); break
// // // // // // // // // // // //     case "statement2": console.log("statement 2 is true"); break
// // // // // // // // // // // //     case "statement3": console.log("statement 3 is true"); break
// // // // // // // // // // // //     default: console.log("no one is correct")
// // // // // // // // // // // // }
// // // // // // // // // // // // ;

// // // // // // // // // // // // // greeting message
// // // // // // // // // // // // let day = "dfhskv";
// // // // // // // // // // // // switch (day) {
// // // // // // // // // // // //     case "morning": console.log("hello good morning"); break
// // // // // // // // // // // //     case "afternoon": console.log("hello good afternoon"); break
// // // // // // // // // // // //     case "evening": console.log("hello good evening"); break
// // // // // // // // // // // //     default: console.log("good");
// // // // // // // // // // // // }

// // // // // // // // // // // // // loop
// // // // // // // // // // // // // for loop :-
// // // // // // // // // // // // for (let i = 10; i >= 1; i--) {
// // // // // // // // // // // //     console.log(i)
// // // // // // // // // // // // }
// // // // // // // // // // // // //print hello world 10 times
// // // // // // // // // // // // for (var p = 1; p <= 4; p++) {
// // // // // // // // // // // //     setTimeout(() => {
// // // // // // // // // // // //         console.log(p)
// // // // // // // // // // // //     }, 10);
// // // // // // // // // // // // }
// // // // // // // // // // // //previous topics :- variables, if else , operators ,  data types 

// // // // // // // // // // // // //26 Oct topics (compulsory to complete it.)
// // // // // // // // // // // // // for, while, do-while, Nested Loops
// // // // // // // // // // // // // Function Declaration, Expression, Arrow Functions, Scope
// // // // // // // // // // // // // Closures, IIFE, Hoisting, Strict Mode 

// // // // // // // // // // // // for (let i = 1; i <= 10; i++) {
// // // // // // // // // // // //     console.log(i);
// // // // // // // // // // // // }
// // // // // // // // // // // for (let i = 10; i >= 1; i--) {
// // // // // // // // // // //     console.log(i);//it will break after printing 5
// // // // // // // // // // //     if (i == 5) {
// // // // // // // // // // //         break;
// // // // // // // // // // //     }
// // // // // // // // // // // }
// // // // // // // // // // // for (let i = 10; i >= 1; i--) {
// // // // // // // // // // //     if (i == 5) {
// // // // // // // // // // //         continue;
// // // // // // // // // // //     }
// // // // // // // // // // //     console.log(i);
// // // // // // // // // // // }

// // // // // // // // // // // // while loop 
// // // // // // // // // // // let x = 10;
// // // // // // // // // // // while (x) {
// // // // // // // // // // //     console.log(x);
// // // // // // // // // // //     x--;
// // // // // // // // // // // };

// // // // // // // // // // // //count the digits
// // // // // // // // // // // let num = 6589;
// // // // // // // // // // // let count = 0;
// // // // // // // // // // // while (num) {
// // // // // // // // // // //     num = Math.floor(num / 10);
// // // // // // // // // // //     count++;
// // // // // // // // // // // }
// // // // // // // // // // // console.log("digits in " + 6589 + " : ", count)

// // // // // // // // // // // // do while loop :- execute before checking the condition , first it execute the code then check the condition.
// // // // // // // // // // // let y = 1;
// // // // // // // // // // // do {
// // // // // // // // // // //     console.log(y);
// // // // // // // // // // //     y++;
// // // // // // // // // // // } while (y == 10);

// // // // // // // // // // // // task:- check the given number is prime or not ;
// // // // // // // // // // // let isPrime = 19;
// // // // // // // // // // // let result;
// // // // // // // // // // // for (let i = 2; i < isPrime; i++) {
// // // // // // // // // // //     if (isPrime % i == 0) {
// // // // // // // // // // //         result = "not prime";
// // // // // // // // // // //         break;
// // // // // // // // // // //     } else {
// // // // // // // // // // //         result = "prime";
// // // // // // // // // // //     };
// // // // // // // // // // // }
// // // // // // // // // // // console.log(result);

// // // // // // // // // // // // nested loop
// // // // // // // // // // // // outer loop ,inner loop ;
// // // // // // // // // // // for (let i = 1; i <= 5; i++) {
// // // // // // // // // // //     for (let j = 1; j <= 5; j++) {
// // // // // // // // // // //         document.write(i);
// // // // // // // // // // //     }
// // // // // // // // // // //     document.write("<br>");
// // // // // // // // // // // }
// // // // // // // // // // // for (let i = 1; i <= 5; i++) {
// // // // // // // // // // //     let output = ""
// // // // // // // // // // //     for (let j = 1; j <= i; j++) {
// // // // // // // // // // //         output += j;
// // // // // // // // // // //     }
// // // // // // // // // // //     console.log(output);
// // // // // // // // // // // }
// // // // // // // // // // // //task 1
// // // // // // // // // // // // 12345
// // // // // // // // // // // // 1234
// // // // // // // // // // // // 123
// // // // // // // // // // // // 12
// // // // // // // // // // // // 1

// // // // // // // // // // // //     *
// // // // // // // // // // // //    **
// // // // // // // // // // // //   ***
// // // // // // // // // // // //  ****
// // // // // // // // // // // // *****
// // // // // // // // // // // document.write("hello&nbsp;&nbsp;world")
// // // // // // // // // // // document.write("<br>");
// // // // // // // // // // // // &nbsp; :- non bracking space ;
// // // // // // // // // // // for (let i = 1; i <= 5; i++) {
// // // // // // // // // // //     for (let j = 5; j >= 1; j--) {
// // // // // // // // // // //         if (i < j) {
// // // // // // // // // // //             document.write("&nbsp;&nbsp;")
// // // // // // // // // // //         } else {
// // // // // // // // // // //             document.write("*")
// // // // // // // // // // //         }
// // // // // // // // // // //     }
// // // // // // // // // // //     document.write("<br>");
// // // // // // // // // // // }
// // // // // // // // // // // //task :-
// // // // // // // // // // // // *****
// // // // // // // // // // // //  ****
// // // // // // // // // // // //   ***
// // // // // // // // // // // //    **
// // // // // // // // // // // //     *

// // // // // // // // // // // // ***********
// // // // // // // // // // // // *         *
// // // // // // // // // // // // *         *
// // // // // // // // // // // // *         *
// // // // // // // // // // // // *         *
// // // // // // // // // // // // *         *
// // // // // // // // // // // // *         *
// // // // // // // // // // // // ***********
// // // // // // // // // // // for (let i = 1; i <= 9; i++) {
// // // // // // // // // // //     for (let j = 1; j <= 9; j++) {
// // // // // // // // // // //         document.write("(", i, ",", j, ")");
// // // // // // // // // // //     }
// // // // // // // // // // //     document.write("<br>");
// // // // // // // // // // // }
// // // // // // // // // // // for (let i = 1; i <= 9; i++) {
// // // // // // // // // // //     for (let j = 1; j <= 9; j++) {
// // // // // // // // // // //         if (i == 1 || i == 9 || j == 1 || j == 9) {
// // // // // // // // // // //             document.write("*");
// // // // // // // // // // //         } else {
// // // // // // // // // // //             document.write("&nbsp;&nbsp;")
// // // // // // // // // // //         }
// // // // // // // // // // //     }
// // // // // // // // // // //     document.write("<br>");
// // // // // // // // // // // }

// // // // // // // // // // // // right angle triangle
// // // // // // // // // // // for (let i = 1; i <= 9; i++) {
// // // // // // // // // // //     for (let j = 1; j <= 9; j++) {
// // // // // // // // // // //         if (i == 9 || j == 1 || i == j) {
// // // // // // // // // // //             document.write("*");
// // // // // // // // // // //         } else {
// // // // // // // // // // //             document.write("&nbsp;&nbsp;")
// // // // // // // // // // //         }
// // // // // // // // // // //     }
// // // // // // // // // // //     document.write("<br>");
// // // // // // // // // // // }
// // // // // // // // // // // // 27 Oct Topics First class
// // // // // // // // // // // // Function declaration ,
// // // // // // // // // // // // Function expression,
// // // // // // // // // // // // Anonymous function ,
// // // // // // // // // // // // IIFE function
// // // // // // // // // // // // Callback function ,
// // // // // // // // // // // // Closure Function ,
// // // // // // // // // // // // Arrow function ,
// // // // // // // // // // // // Scope,
// // // // // // // // // // // // Hoisting,
// // // // // // // // // // // // Strict Mode,
// // // // // // // // // // // // Array and its Method 

// // // // // // // // // // // // Loop  compelete :- remaining for in ,for of loop 
// // // // // // // // // // // // Functions 
// // // // // // // // // // // // let a = 10;
// // // // // // // // // // // // console.log(a);

// // // // // // // // // // function fun(p1, p2) {
// // // // // // // // // //     console.log('code to be executed', p1, p2);
// // // // // // // // // // }
// // // // // // // // // // fun(44, 55);

// // // // // // // // // // function Sum(p1, p2) {
// // // // // // // // // //     return "hello world" + (p1 + p2);
// // // // // // // // // // }
// // // // // // // // // // let output = Sum(9, 9);
// // // // // // // // // // console.log(output);
// // // // // // // // // // document.write(Sum(55, 67));

// // // // // // // // // // //1: function declration 
// // // // // // // // // // Message() // we can access it here because of hoisting.
// // // // // // // // // // function Message() {
// // // // // // // // // //     console.log('Hello Message');
// // // // // // // // // // }
// // // // // // // // // // // console.log(user);
// // // // // // // // // // // let user = "raj";
// // // // // // // // // // // console.log(run)
// // // // // // // // // // // var run  =function main(){console.log("run")}

// // // // // // // // // // // 2 function expression 
// // // // // // // // // // let data = function () {
// // // // // // // // // //     console.log("this is function expression");
// // // // // // // // // // }
// // // // // // // // // // data();

// // // // // // // // // // // main()// it doesn't work here
// // // // // // // // // // let obj = {
// // // // // // // // // //     getdata: function () {
// // // // // // // // // //         console.log("get data fun")
// // // // // // // // // //     }
// // // // // // // // // // }
// // // // // // // // // // //getdata work as a method of obj here.

// // // // // // // // // // // // //count the digits
// // // // // // // // // // // let num = 6589;
// // // // // // // // // // // let count = 0;
// // // // // // // // // // // while (num) {
// // // // // // // // // // //     num = Math.floor(num / 10);
// // // // // // // // // // //     count++;
// // // // // // // // // // // }
// // // // // // // // // // // console.log("digits in " + 6589 + " : ", count)

// // // // // // // // // // function countDigit(num) {
// // // // // // // // // //     let count = 0;
// // // // // // // // // //     while (num) {
// // // // // // // // // //         num = Math.floor(num / 10);
// // // // // // // // // //         count++;
// // // // // // // // // //     }
// // // // // // // // // //     console.log("digits : ", count)
// // // // // // // // // // }

// // // // // // // // // // countDigit(56430);
// // // // // // // // // // countDigit(56323430);
// // // // // // // // // // countDigit(564354);

// // // // // // // // // // // anonyomous function :- a function without name.

// // // // // // // // // // // CallBack function :- a function which is called after the execution of parent function and passed as an argument to the parent function .
// // // // // // // // // function main(fn) {
// // // // // // // // //     console.log("calculation start here...");
// // // // // // // // //     let k = 0;
// // // // // // // // //     for (let i = 0; i <= 999999999; i++) { k++; }
// // // // // // // // //     console.log("calculation ends here...");
// // // // // // // // //     fn(k)
// // // // // // // // // }
// // // // // // // // // function callbackfun(a) {
// // // // // // // // //     console.log("callback function", a);
// // // // // // // // // }
// // // // // // // // // // main(callbackfun);
// // // // // // // // // //arrow function :- 
// // // // // // // // // let arrowfun = () => {
// // // // // // // // //     console.log('this is arrow func')
// // // // // // // // // }
// // // // // // // // // arrowfun();
// // // // // // // // // // let result = () => "this is the result";
// // // // // // // // // let result = () => {
// // // // // // // // //     console.log("start")
// // // // // // // // //     return "this is the result"
// // // // // // // // //     console.log("end")//it will not execute becuase of the function stop at return 
// // // // // // // // // };
// // // // // // // // // console.log(result());
// // // // // // // // // // diffrence 
// // // // // // // // // // 1 syntax is diffrent , in arrow function , function keyword is not required .
// // // // // // // // // // 2  arguments object is not registred in arrow function
// // // // // // // // // //3 can not be used as constructor function

// // // // // // // // // function hello() {
// // // // // // // // //     console.log(arguments);
// // // // // // // // // }
// // // // // // // // // hello(95, 5, 5);
// // // // // // // // // let ar = () => {
// // // // // // // // //     // console.log(arguments);//it give us a error // because of arguments object is not defined in arrow function.
// // // // // // // // // }
// // // // // // // // // ar(434, 4, 4);

// // // // // // // // // // rest parameter(...rest) :- used to get all the remaining arguments in an array. always used as a last parameter.
// // // // // // // // // function sum(a, b, ...args) {
// // // // // // // // //     console.log(a, b, args)
// // // // // // // // // }
// // // // // // // // // sum(33, 44, 56, 67, 567, 76);

// // // // // // // // // IIFE function
// // // // // // // // // Closure Function ,
// // // // // // // // // Scope,
// // // // // // // // // Hoisting,
// // // // // // // // // Strict Mode,
// // // // // // // // // Array and its Method 
// // // // // // // // //lexical scope:- the scope is defined  when the function or  is declared not when the function is called.
// // // // // // // // function main() {
// // // // // // // //     let count = 0;
// // // // // // // //     return function () {
// // // // // // // //         count++;
// // // // // // // //         console.log(count);
// // // // // // // //     }
// // // // // // // // }
// // // // // // // // let output = main();//here the inner function is returned
// // // // // // // // output();
// // // // // // // // output();//it will print the updated value of count.

// // // // // // // // //scope chaining:-  first find the variable in personal scope , if is not found then travel to the parent scope to find this value ,it will travel upward until the value is not found, if it is not found in the outermost scope also then it give us the error
// // // // // // // // let user = "elon"
// // // // // // // // function run() {
// // // // // // // //     console.log(user)//it gives us refrence error of cannot access before initilization.
// // // // // // // //     // let user = "raj";
// // // // // // // //     var user = "raj";//if declared with var it give us undefined.
// // // // // // // // }
// // // // // // // // run();

// // // // // // // // // IIFE - Immediately Invoked Function Expression
// // // // // // // // (function () {
// // // // // // // //     let private = "sdvnv"
// // // // // // // //     console.log("IIFE function", private);
// // // // // // // // })()

// // // // // // // // //Strict Mode ;


// // // // // // //default parameters
// // // // // // function sum(a = 0, b = 0) {//a=0 ,b =0 default parameter
// // // // // //     console.log(a, b, a + b);
// // // // // // }
// // // // // // sum(22, 99);
// // // // // // //if the arguments are not passed it will use 0, and if the arguments are pass then it will replace with this arguments.
// // // // // // // Array and its Methods

// // // // // // //array is a collection of similiar type of elements.
// // // // // // let array = [88, 2, 3, 4, 2, 5, 3, 4];
// // // // // // console.log(array);
// // // // // // document.write(array, "<br>");
// // // // // // console.log(array[4])
// // // // // // document.write(array[2])
// // // // // // array[10] = 99;//total length of the array is 11 here.
// // // // // // console.log(array);
// // // // // array = [4, 5, 3, 54, 5, 3];
// // // // // // // for in loop
// // // // // // for (let i in array) {
// // // // // //     console.log(i, array[i]);
// // // // // // }

// // // // // // for of loop
// // // // // // for (let i of array) {
// // // // // //     console.log(i);//in i variable ,values of array are stored 
// // // // // // }
// // // // // // array methods 
// // // // // // length method : used to find the length of the array
// // // // // console.log(array.length);//6
// // // // // // at()
// // // // // //  , it takes  index and find the value
// // // // // console.log(array)
// // // // // console.log(array.at(3))//negative index work from last ,

// // // // // //delete :-used to replace elements with empty;
// // // // // delete array[0];
// // // // // console.log(array);
// // // // // //concat:-used to merge two arrays, 
// // // // // //indexof : find the given value's index ,print the index if find the value, and print -1 if not found
// // // // // // includes:- used to find the given value, print true if find and print false if not
// // // // // //join:- use to join the complete array with the given value and convert it into string
// // // // // //fill :- used to fill the element with the given value. in a given range.
// // // // // let newar = array.concat([77, 88, 99])
// // // // // console.log(newar);
// // // // // array[0] = 9
// // // // // console.log(array.indexOf(3));
// // // // // console.log(array.includes(54));
// // // // // console.log(array.join("/"))
// // // // // // console.log(array.fill(value,startingindex,endingindex+1));
// // // // // console.log(array.fill(0, 2, 6));

// // // // // console.log(array);

// // // // // //push ,pop ,shift, unshift ,find ,filter , slice  ,splice , map ,reduce ,sort ,reverse
// // // // // // push :-  used to insert elements form the  last index,we can add multiple element at once;
// // // // // //pop : used to delete elements form last index , it delete one element at a time and return it
// // // // // array.push(66, 77, 88);
// // // // // console.log(array);
// // // // // console.log(array.pop())
// // // // // console.log(array);

// // // // // // shift :used to remove first element of the array , one element at a time,
// // // // // // unshift :- used to insert multiple element from starting index.
// // // // // console.log(array.unshift(33, 222, 1, 1));
// // // // // console.log(array)
// // // // // console.log(array.shift());
// // // // // console.log(array);

// // // // // // reverse : used to reverse the array
// // // // // console.log(array.reverse());//parmanently changed


// // // // // // Array Methods, map(), filter(), reduce(), forEach()
// // // // // // Objects, Forms, Errors, Debugging
// // // // // // DOM Tree, Selecting Elements, Modifying Elements
// // // // // // Mouse Events, Keyboard Events, Form Events

// // // // //push ,pop ,shift, unshift ,find ,filter , slice  ,splice , map ,reduce ,sort ,reverse
// // // // let array = [33, 44, 21, 1, 4, 65, 3, 6, 7];
// // // // //task :- reverse the array without using reverse method;
// // // // let rev  = [];
// // // // for(let i=array.length-1;i>=0;i--){
// // // //     console.log(array[i]);
// // // //     rev[(array.length-1) - i] = array[i];
// // // // }
// // // // console.log(rev);
// // // // array = rev ;
// // // // console.log(array); 
// // // // // find and filter:-find method used to find the element from the array which match the return condition
// // // // // find:
// // // // console.log("find :-" , array.find((a)=>{
// // // //     console.log(a);
// // // //     // return a % 2==0;
// // // //     return a %5 ==0;
// // // // })
// // // // );
// // // // console.log("filter :-" , array.filter((a)=>{
// // // //     return a % 2==0;
// // // // }));


// // // // //filter used to return all the elements which match the given condition .
// // // //slice(startindex,endindex+1)
// // // // (it take two arguments first is starting index, ending index+1) it return new array,
// // // let newarr = array.slice(3, 6);
// // // console.log(newarr);
// // // // splice :-it add elements,remove elements, replace elements,it take 3 arguments, 
// // // // splice(startindex ,deletecount,insertelements);
// // // //insert elements:-
// // // array.splice(2, 0, 33)
// // // array.splice(4, 0, 88, 99, 77, 66)
// // // console.log(array);
// // // //delete elements
// // // array.splice(5, 4);//it will delete element present at 5 index;
// // // console.log(array);
// // // //replace elements;
// // // array.splice(3, 1, 100);//it delete the 3 index element and insert 100 .
// // // console.log(array);
// // // //insert an element in the array on 3 index.without using splice method./
// // // //map ,reduce :-
// // array = [4, 4, 53, 6, 3, 6, 4, 7, 8, 899,];
// // let result = array.map((value, index) => {
// //     // console.log(value ,index);
// //     return value * 10;
// // })
// // console.log(result);
// // let data = ["raj", "ram", "raman", "harish", "rajesh"];
// // data.map((v, i) => {
// //     document.write("<h1>"+ v + "</h1>");
// //     // document.write(`<div class="card">
// //     //     <h1>Name : ${v}</h1>
// //     // </div>`);
// // });
// // //reduce :- used to reduce the array in a single value;
// // // reduce(callback , accumulator);
// // console.log(array);
// // let output = array.reduce((a,b)=>{
// //     return a + b ;
// // },10);

// // //accumulator a is provided here.
// // console.log(output);
// // //forEach:-it return undefined .
// // array.forEach((element ,index) => {
// //     console.log(element ,index );
// //     console.log(element * 10);
// // });
// // //object :- Object is non-primitive data type , used to store data in keyvalue pair , using curly brackets. it store all the data types as a value.
// let  obj = {name:"raj" ,age:10, salried:true};
// console.log(obj);
// document.write(obj);
// console.log(obj.name)
// console.log(obj["name"]);
// obj.name = "naman";
// obj.address = "mathura";
// console.log(obj);
// let price = 1000;
// let keyname = "course";
// let newobj = {price,[keyname]:"BTECH"};//here the price variable convert into key:value pair in the object;
// console.log(newobj);
// let data = {name:"raj",age:10};
// // let name = data.name ;
// //object destrcuturing 
// let  {name:username ,age} = data
// console.log(username ,age) ;  


// let names = ["Deepu", "Prarthnaa", "Jeetu", "Chauhan", "Arjun"];
// let [a, b, c, d, e] = names;
// console.log(a, b, c, d, e);
// let x = 10;
// let y = 20;
// [x, y] = [y, x];
// console.log(x, y);
// let obj1 = {name:"Deepu"};
// let obj2 = {age:20};
// let obj3 = {...obj1, ...obj2, address:"Mathura"};//it will merge the two objects into one object.
// console.log(obj3);
// function sum(...a){
//     console.log(a);
// }
// sum(44,5,6,4,6, 4);

// let ar = [44, 5, 6, 4, 6, 4];
// console.log(...ar);//it will print the array in a single line without square brackets.
// let newer = [1, 2, 3, ...ar, 4, 5];
// console.log(newer);

// let obj = {Name:"Deepu", Age:20, Address:"Mathura"};
// console.log(Object.keys(obj));//it will return the keys of the object in an array.
// console.log(Object.entries(obj));
// for(let [key, value] of Object.entries(obj)){
//     console.log(key + ": " + value);
// }

//console.log(Object.values(obj));//it will return the values of the object in an array.
//console.log(Object.hasOwn(obj, "Price"));//it will return true if the object has the given key, otherwise false.
//Object.freeze(obj);//it will freeze the object, we can't add or delete any key:value pair in the object.
//obj.name="Salonii";//it will not change the value of the name key, because the object is frozen.
//obj.price=1000;
//console.log(obj);

// Object.seal(obj);//it will seal the object, we can't add any new key:value pair in the object, but we can change the value of the existing keys.
// obj.price=1000;
// obj.name="Salonii";
// console.log(obj);
// console.log(Object.isSealed(obj));//it will return true if the object is sealed, otherwise false.

// console.log(Object.is("hi", "hi"));//it will return true if the two values are same, otherwise false.
// console.log([]==[]);
// console.log(obj.toString());//it will return the string representation of the object.
// console.log(Object.create());
// let newobj = Object.create(obj);//it will create a new object with the given object as its prototype.
// console.log(newobj);
// console.log(newobj.name);//it will return the value of the name key from the prototype object.

// let a = 10;

// try {
//     a();
// } catch(error) {
//     console.log(error.message);
//     console.log(error.stack);
// }

// console.log("Last line ");
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Lab-03/11</h1>
    <p id = "para1" class = "paraclass">Hello World!</p>
    <p id = "para2" class = "paraclass">Hello World!</p>
    <p id = "para3" class = "paraclass">Hello World!</p>
    <div class = "paraclass">Hello Deepu</div>
    

    <script>
      
        // console.time("time");
        // document.write("hello world");
        // console.log("hello world");
        // console.warn("warning");
        // console.error("error");
        // console.timeEnd("time");
        let elem = document.getElementsByClassName("paraclass");
        console.log(elem);
        for(let i of elem){
            i.textContent = "new data here"
        }
        elem[3].textContent = "last element"

        let elem2 = document.querySelector("div");
        let elem3 = document.querySelector("#para1");
        let elem4 = document.querySelector(".paraclass");
        console.log(elem2);
        console.log(elem3);
        console.log(elem4);
        
        
        
    </script>

  </body>
</html>

