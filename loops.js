const names = [
    ['Andrei', 'Alexandru', 'Andreea', 'Alexandra'],
    ['Bobby', 'Cosmin', 'Doru', 'Ene', 'Florina'],
    ['Geo', 'Hortensia', 'Ilie']
]

// NESTED FOR LOOPS
// console.log(names);

// for (let i = 0; i < names.length; i++) {
//     const row = names[i];
//     console.log(`This is the row number ${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

//NESTED FOR AND SWITCH IN WHILE
// let i = 0;
// while (i <= 10) {
//     console.log(`this is ${i}`);
//     for (let j = 1; j < 4; j++) {
//         switch (j) {
//             case j = 1:
//                 console.log('A')
//                 break;
//             case j = 2:
//                 console.log('B')
//                 break;
//             case j = 3:
//                 console.log('C')
//                 break;
//         }
//     }
//     i++;
// }

// COPY UNTIL "STOP"
// let input = prompt("Please tipe something!")

// while (true) {
//     input = prompt(input);
//     if (input === "stop") break;
// }

// alert("OK!")

//for of LOOPS - used for iterable ojects: arrays&strings
// let counter = 1;
// for (let row of names) {
//     console.log(`The row is ${row}`);
//     for (let student of row) {
//         console.log(`The student with id ${counter} is ${student}`)
//         counter++;
//     }
// }

// const myString = "Hello there!";
// for (char of myString) {
//     console.log(char);
// }

// //Which is the same as:

// for (let i = 0; i <= myString.length; i++) {
//     console.log(myString[i]);
// }

//for in LOOPS - used for object literals
const scores = { Alex: 95, Andrei: 74, Andreea: 85 }

for (let student in scores) {
    console.log(`The score of ${student} is ${scores[student]}`)
}

let sum = 0;
let avg = 0;
const studentArray = Object.values(scores); //This variable contains the number of elements in the array made by the object
for (let score of studentArray) {
    sum += score;
}

avg = Math.floor(sum / studentArray.length);

console.log(`The sum of scores is ${sum}.`);
console.log(`The average of scores is ${avg}.`);