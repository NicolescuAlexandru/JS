// //Defining a function
// function msg() {
//     console.log('Call this function later');
// }
// //Calling a function
// msg();

// //Functions with arguments
// function greet(name) {
//     console.log(`Hello ${name} !`);
// }
// greet('Alex');

// //More arguments
// function findLargest(x, y) {
//     if (x > y) {
//         console.log(`${x} is larger than ${y}.`);
//     } else if (x === y) {
//         console.log(`${x} is equal to ${y}.`);
//     } else {
//         console.log(`${x} is smaller than ${y}.`);
//     }
// }
// findLargest(1, 5);

// //Repeated functions
// function repeat(msg, rep) {
//     let concatString = '';
//     for (let i = 0; i < rep; i++) {
//         concatString += msg + ' ';
//     } console.log(concatString);
// }
// repeat('Hi there!', 4);

//Return Keyword
// function summing(x, y) {
//     console.log(`The numbers are ${x} and ${y}. The sum is:`)
//     return x + y;
// }
// const sum = summing(1, 2);
// console.log(sum);

// //Function that gives the last element of an array
// function lastElement(str) {
//     if (str.length === 0) {
//         return null;
//     } else {
//         return str[str.length - 1];
//     }
// }
// const arr = ['A', 'B', 'C'];
// console.log(lastElement(arr));

//Function that returns the days of a week by index
// const daysOfWeek = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// function returnDay(num) {
//     if (num < 1 || num > 7) {
//         return null;
//     } else {
//         return daysOfWeek[num];
//     }
// }

// //Explanation of Block Scope
// //The word **var** allows you to access a variable that is inside any block (not a function!)
// if (bird !== 'eagle') {
//     var bird = 'pigeon';
// }
// console.log(bird); //prints 'pigeon' from inside the conditional block

//Explanation of Fuctions Scope
//You cannout access a variable scoped inside a functin outside of this function

// let bird = 'eagle'
// function birdChoose() {
//     let bird = 'pigeon';
//     return bird;
// }

// console.log(bird);
// birdChoose();
// console.log(bird);
// //both of them will print 'eagle';

//Lexical Scoping and Functions
// function outer() {
//     let name = 'Alex';
//     function inner() {
//         alert(`Hello ${name}!`);
//     }
//     inner();
// }
// outer();
//This will alert 'Hello Alex!'

//Function Expressions
// const square = function (num) {
//     return num * num;
// }
// square(7);

// //Higher Order Functions
// function callTwice(func) {
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6 + 1);
//     console.log(roll);
// }

// callTwice(rollDie);

//Returning functions
// const isNumBetween = function (min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }

// console.log(isNumBetween(30, 40)(35)); //prints true
// //OR
// const isChild = isNumBetween(0, 18);
// console.log(isChild(17)); //prints true

// //Methods (functions as properties)
// const myMath = {
//     PI: 3.14,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     },
//     add: function (x, y) {
//         return x + y;
//     }
// }
// console.log(myMath.square(myMath.add(3, 4)));
// //This prints the square of the sum of 3 and 4, which is 49
// console.log(myMath.cube(myMath.add(3, 4)));
// //This prints the cube of the sum of 3 and 4, which is 343

// //Method shorthand: the object above can be written as:
// const myMathShorter = {
//     PI: 3.14,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3;
//     },
//     add: function (x, y) {
//         return x + y;
//     }
// }
