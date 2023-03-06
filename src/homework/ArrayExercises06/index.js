//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//a) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

let element1 = ["hydrogen","H",1.008];
let element2 = ["helium","He",4.003];
let element26 = ["iron","Fe",55.85];

//b) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

let table = [];
table.push(element1,element2,element26);
// console.log(table);

//c) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

// console.log(table[1]);
// console.log(table[0][2]);

//d) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

// console.log(table[0][2]);
// console.log(table[1][0]);
// console.log(table[2][1]);

//e) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

let LC101 =[]
let segments = ["JavaScript","Java","LiftOff","Apprenticeship"];
let javaScript = ["Data & Variables","Conditionals, Errors, & Debugging","Strings & Arrays","Functions","More on Functions","Class 9","Class 10","Class 11","Class 12","Class 13","Class 14","Class 15","Class 16","Class 17","Class 18","Class 19","Class 20"];
let java = ["Class 1","Class 2","Class 3","Class 4","Class 5","Class 6","Class 7","Class 8","Class 9","Class 10","Class 11","Class 12","Class 13","Class 14","Class 15","Class 16","Class 17","Class 18","Class 19","Class 20","Class 21"];
let liftOff = ["Class 1","Class 2","Class 3","Class 4","Class 5","Class 6","Class 7","Class 8"];
let class3 = ["Resume Review"];
let class6 = ["Live Coding Mock Interview"];
let class7 = ["Behavioral Mock Interview"];

LC101.push(javaScript,java,liftOff,"Apprenticeship");
liftOff.splice(4,1,class3);
liftOff.splice(7,1,class6);
liftOff.splice(8,1,class7);
console.log(LC101[0][2],LC101[2][2]);