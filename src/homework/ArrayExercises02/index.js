let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//a) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.

cargoHold.splice(5,1,"space tether");
// console.log(cargoHold);

//b) Remove the last item from the array with pop. Print the element removed and the updated array.

// console.log(cargoHold.pop());
// console.log(cargoHold);

//c) Remove the first item from the array with shift. Print the element removed and the updated array.

// console.log(cargoHold.shift());
// console.log(cargoHold);

//d) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.

cargoHold.unshift(1138);
cargoHold.push("20 meters");
// console.log(cargoHold);

//e) Use a template literal to print the final array and its length.

console.log(`${cargoHold} has a length of ${cargoHold.length}.`)