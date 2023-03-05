const input = require('readline-sync');
let password1 = '';
let password2 = '';

// Part A: #1 Populate these arrays

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli','asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
    let pantry = [protein, grains, veggies, beverages, desserts];
    let meals = [];

    /// Part A #2: Write a ``for`` loop inside this function
    /// Code your solution for part A #2 below this comment (and above the return statement) ... ///

    for (let i = 0; i < numMeals; i++) {
        let menu = [protein[i],grains[i],veggies[i],beverages[i],desserts[i]];
        meals.push(menu);
    }

    return meals;
}


function askForNumber() {
    numMeals = input.questionInt("How many meals would you like to make? " );

    /// CODE YOUR SOLUTION TO PART B here ///

    while (numMeals > 0) {
        if (numMeals < 1 || numMeals > 6) {
            console.log("This is not a valid option. Please, try again.");
            numMeals = input.questionInt("How many meals would you like to make? ");
        } else {
            console.log("Thank you.");
            break;
        }
    }

    return numMeals;
}


function generatePassword(password1, password2) {
    let code = '';
    let code1 = '';
    let code2 = '';
    let pass1 = password1.length;
    let pass2 = password2.length;
    let passLen = 0;

    // The following if statements restrict the length of both passwords to be equal to the shortest option. IOW, if one password is 4 char & one is 14 char, then the generator will only apply to the first 4 char of each string, ignoring any remaining characters in the longer string.
    if (pass1 < pass2) {
        passLen = pass1;
        // console.log('pass1');
    } else if (pass1 > pass2) {
        passLen = pass2;
        // console.log('pass2');
    } else if (pass1 = pass2) {
        passLen = pass1;
        // console.log('equal');
    } else {
        console.log(`Invalid Password(s) enterred.`);
    }

    for (i = 0; i < passLen; i++) {
        code1 = password1[i];
        code2 = password2[i];
        code = code + code1 + code2;
    }
    /// Code your Bonus Mission Solution here ///

    return code;
}

function runProgram() {

    /// TEST PART A #2 HERE ///
    /// UNCOMMENT the two lines of code below that invoke the mealAssembly function (starting with 'let meals =') and print the result ///
    /// Change the final input variable (aka numMeals) here to ensure your solution makes the right number of meals ///
    /// We've started with the number 2 for now. Does your solution still work if you change this value? ///

    let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 4);
    // console.log(meals)


    /// TEST PART B HERE ///
    /// UNCOMMENT the next two lines to test your ``askForNumber`` solution ///
    /// Tip - don't test this part until you're happy with your solution to part A #2 ///

    let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
    console.log(mealsForX);

    /// TEST PART C HERE ///
    /// UNCOMMENT the remaining commented lines and change the password1 and password2 strings to ensure your code is doing its job ///

    password1 = 'Green';
    password2 = 'Asparagus';
    console.log("Time to run the password generator so we can update the menu tomorrow.");
    console.log(`The new password is: ${generatePassword(password1, password2)}`);
}

module.exports = {
    protein: protein,
    grains: grains,
    veggies: veggies,
    beverages: beverages,
    desserts: desserts,
    mealAssembly: mealAssembly,
    askForNumber: askForNumber,
    generatePassword: generatePassword,
    runProgram: runProgram
};