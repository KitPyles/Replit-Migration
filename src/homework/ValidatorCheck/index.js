const input = require('readline-sync');

function getValidInput(prompt, isValid) {

    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
        console.log("Invalid input. Try again.");
        userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator
// that ensures input starts with "a"

let isValid = function (password) {
    if ((password[0] === "A") || (password[0] === "a")) {
        return true;
    }
    return false;
}

// TODO 2: write a validator
// that ensures input is a vowel

let isVowel = function (password) {
    if ((password[0] === "A" ) || (password[0] ==="a") || (password[0] === "E") || (password[0] === "e") || (password[0] === "I") || (password[0] === "i") || (password[0] === "O") || (password[0] === "o") || (password[0] === "U") || (password[0] === "u")) {
        return true;
    }
    return false;
}

// Be sure to test your code!
console.log(getValidInput(`Enter a password: `, isVowel));