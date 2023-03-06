const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let food1 = food.split(",").sort();
// console.log(food1);
let equipment1 = equipment.split(",").sort();
// console.log(equipment1);
let pets1 = pets.split(",").sort();
// console.log(pets1);
let sleepAids1 = sleepAids.split(",").sort();
// console.log(sleepAids1);

//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [food1,equipment1,pets1,sleepAids1];

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.

let cargoInput = input.questionInt("Please, select a cabinet (0-3): ");

//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

// if (cargoInput > 3 || cargoInput < 0) {
//   console.log(`${cargoInput} is not a valid choice. Please, reload & try again.`);
// } else {
//   console.log(`You have selected Cabinet #${cargoInput}. This cabinet contains: ${cargoHold[cargoInput]}.`)
// }

//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

if (cargoInput > 3 || cargoInput < 0) {
    console.log(`${cargoInput} is not a valid choice for Cabinet Slot. Please, reload & try again.`);
} else {
    let cabinetInput = input.question("Please, enter an item to locate within this cabinet: ")
    if (!cargoHold[cargoInput].includes(cabinetInput)){
        console.log(`Cabinet #${cargoInput} does not contain ${cabinetInput}.`)
    } else {
        console.log(`You have selected Cabinet #${cargoInput}. This cabinet does contain ${cabinetInput}.`)
    }
}