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
const daysOfWeek = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
function returnDay(num) {
    if (num < 1 || num > 7) {
        return null;
    } else {
        return daysOfWeek[num];
    }
}

