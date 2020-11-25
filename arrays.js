// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //forEach method
// // numbers.forEach(function (num) {
// //     console.log(num ** 2);
// // })

// // for (elem of numbers) {
// //     console.log(elem ** 2);
// // }

// // for (let i = 0; i < numbers.length; i++) {
// //     console.log(numbers[i] ** 2);
// // }
// //All these print out the same result (every number squared)

// //map method
// const doubles = numbers.map(function (num) {
//     return num * 2;
// })

// console.log(doubles);

// const movies = [
//     {
//         title: "Titanic",
//         score: 98
//     },
//     {
//         title: "Parasite",
//         score: 95
//     },
//     {
//         title: "Silence of the Lambs",
//         score: 89
//     },
//     {
//         title: "Sharknado",
//         score: 55
//     },
//     {
//         title: "The Room",
//         score: 37
//     }
// ];

// const titles = movies.map(function (movie) {
//     return movie.title.toUpperCase();
// })
// console.log(titles);

// //Arrow functions
// const add = function (x, y) {
//     return x + y;
// }

// //The function above can be reshaped as:
// const add2 = (x, y) => {
//     return x + y;
// }

// //If there is just one parameter, write:
// const square = num => {
//     return num ** 2;
// }

// //If there is no parameter, write:
// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

// //Implicit return
// const add3 = (x, y) => (x + y);

// // //setTimeout
// // for (let i = 1; i <= 10; i++) {
// //     setTimeout(() => {
// //         console.log(`Hello ${i}`);
// //     }, i * 1000);
// // }

// // //setInterval
// // setInterval(() => {
// //     console.log(`Hello`);
// // }, 1000);

// //filtere method
// const isEven = numbers.filter(num => {
//     return num % 2 === 0;
// })
// console.log(isEven);

// const goodMovies = movies.filter(movie => {
//     return movie.score >= 80;
// });

// const badMovies = movies.filter(movie => {
//     return movie.score < 80;
// });

// //Combine map and filter
// const goodMoviesTitle = movies.filter(movie => (movie.score >= 80)).map(movie => (movie.title));
// console.log(goodMoviesTitle);
// const badMoviesTitle = movies.filter(movie => (movie.score < 80)).map(movie => (movie.title));
// console.log(badMoviesTitle);

// //The every and some methods
// const allEven = numbers.every(num => (num % 2 === 0));
// console.log(allEven); //false, not all of them are even

// const someEven = numbers.some(num => (num % 2 === 0));
// console.log(someEven); //true, some numbers are even
