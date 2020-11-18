//Simple Guessing Game
let maximum = parseInt(prompt("Maximum numer is:"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number:"));
}
console.log(`The chosen maximum is ${maximum}`)

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Your guess is:"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "quit") break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter another guess:");
    } else {
        guess = prompt("Too small! Enter another guess:");
    }
}

if (guess === "quit") {
    console.log(`You quited the game after ${attempts} guesses. The target number was ${targetNum}.`)
} else {
    console.log(`The target number was ${targetNum}, and it took you ${attempts} guesses.`);
}