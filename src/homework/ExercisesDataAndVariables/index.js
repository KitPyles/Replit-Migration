// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeed = 17500;
let distanceMars = 225000000;
let distanceMoon = 384400;
let milesPerKilometer = 0.621;


// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log (typeof distanceMars);
console.log(typeof distanceMoon);
console.log(typeof milesPerKilometer);



// Code your solution to exercises 3 and 4 here:
console.log("Q3");
let milesMars = (distanceMars * milesPerKilometer);
let hoursMars = milesMars / shuttleSpeed;
let daysMars = hoursMars / 24;
console.log(shuttleName + " will take " + daysMars + " days to reach Mars.");
let milesMoon = (distanceMoon * milesPerKilometer);
let hoursMoon = milesMoon / shuttleSpeed;
let daysMoon = hoursMoon / 24;
console.log(shuttleName + " will take " + daysMoon + " days to reach the Moon.");

console.log("Q4");






// Code your solution to exercise 5 here: