// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system.

const input = require("readline-sync");

function initialPrompt() {
    // added recursive code to filter for invalid words (numbers)
    console.log("Let's play some scrabble!");
    let word = input.question('Please, enter your word: ');
    if (isNaN(Number(word))) {
        return word;
    } else {
        console.log(`Not a valid word. Please, try again.`);
        return initialPrompt();
    }
};

const oldPointStructure = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
};

function oldScrabbleScorer() {
    word = word.toUpperCase();
    let letterPoints = "";
    let score = 0;
    for (let i = 0; i < word.length; i++) {

        for (const pointValue in oldPointStructure) {

            if (oldPointStructure[pointValue].includes(word[i])) {
                letterPoints += `Points for '${word[i]}': ${pointValue}\n`
                score += Number(pointValue);
            }

        }
    }
    return score;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

let simpleScore = function (user) {
    let score = user.length;
    return score;
};

let vowelBonusScore = function (user) {
    user = user.toUpperCase();
    let score = 0;
    let vowels = ['A','E','I','O','U'];
    for (i = 0; i < vowels.length; i++) {
        if (user.toUpperCase().includes(vowels[i])) {
            score += (user.toUpperCase().split(vowels[i]).length - 1) * 3;
        }
    }
    score += user.length - (score / 3);
    return score;
};

let scrabbleScore = function (user) {
    user = user.toLowerCase();
    let letterPoints = "";
    let score = 0;
    for (i = 0; i < user.length; i++) {
        letterPoints += `Points for '${user[i]}': ${newPointStructure[user[i]]}\n`
        score += Number(newPointStructure[user[i]]);
    }
    console.log(letterPoints);
    return score;
};

let scoreOne = {
    name: 'Simple Score',
    description: 'Each letter is worth 1 point.',
    scoringFunction: simpleScore
}
let scoreTwo = {
    name: 'Bonus Vowels',
    description: `Vowels are 3 pts, consonants are 1 pt.`,
    scoringFunction: vowelBonusScore
}
let scoreThree = {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scoringFunction: scrabbleScore
}

const scoringAlgorithms = [scoreOne,scoreTwo,scoreThree];

function scorerPrompt () {
    // added recursive code to filter out invalid choices
    console.log(`Which scoring algorithm would you like to use?\n---------------------------
0 - ${scoreOne.name}: ${scoreOne.description}
1 - ${scoreTwo.name}: ${scoreTwo.description}
2 - ${scoreThree.name}: ${scoreThree.description}`)
    let i = input.questionInt('Enter 0, 1, or 2: ');
    if (i <= 2 && i >= 0) {
        let score = scoringAlgorithms[i].scoringFunction(word);
        let scorePrint = `Your Score for '${word}' using ${scoringAlgorithms[i].name} is: ${score}.`;
        return scorePrint;
    } else {
        console.log(`That is not a valid option. Please, try again.`);
        return scorerPrompt();
    }
}

let newPointStructure;

function transform (obj) {
    let newObject = {};
    let oldPSArray = [1,2,3,4,5,8,10];
    let alphabet = String.fromCharCode(...Array(123).keys()).slice(97);
    alphabet = alphabet.split("");
    newObject = Object.fromEntries(alphabet.map(key => [key, 0]));
    for (i = 0; i < alphabet.length; i++) {
        for (j = 0; j < oldPSArray.length; j++) {
            if (oldPointStructure[oldPSArray[j]].includes(alphabet[i].toUpperCase())) {
                newObject[alphabet[i]] = oldPSArray[j];
            }
        }
    }
    // Added "blank tiles", as well as 0-value tiles for common punctuation used within words ("'" & "-")
    newObject[' '] = 0;
    newObject["'"] = 0;
    newObject['-'] = 0;
    return newObject;
}

newPointStructure = transform(oldPointStructure);

function replay () {
    let answer = input.question(`Would you like to play again? Y/N: `);
    if (answer === "n" || answer === "N") {
        console.log(`Thank you for playing!`);
    } else if (answer === "y" || answer === "Y") {
        return runProgram();
    } else {
        console.log(`Please, enter either "Y" for "Yes", or "N" for "No."`);
        return replay();
    }
}

function runProgram() {
    word = initialPrompt();
    console.log(scorerPrompt());
    // Got tired of having to hit Run everytime I wanted to test multiple scorers. Added recursive function to play again.
    replay();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
    initialPrompt: initialPrompt,
    transform: transform,
    oldPointStructure: oldPointStructure,
    simpleScore: simpleScore,
    vowelBonusScore: vowelBonusScore,
    scrabbleScore: scrabbleScore,
    scoringAlgorithms: scoringAlgorithms,
    newPointStructure: newPointStructure,
    runProgram: runProgram,
    scorerPrompt: scorerPrompt,
    replay: replay
};