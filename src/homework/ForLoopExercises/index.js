/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
let line = "----------";
console.log("A");
for (let i = 0; i < 21; i++) {
    console.log(i);
}
console.log(line);
console.log("B");
for (let i = 3; i < 30; i = i + 2) {
    console.log(i);
}
console.log(line);
console.log("C");
for (let i = 12; i > -15; i = i -2) {
    console.log(i);
}
console.log(line);
console.log("D");
for (let i = 50; i >= 20; i = i - 1) {
    let remainder = i % 3;
    if ((remainder != 1) && (remainder != 2)) {
        console.log(i);
    }
}

/*Exercise #2:
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */

let str = "LaunchCode";
let arr = [1,5,'LC101','blue',42];
let reversed = ""

for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
for (i = 0; i < str.length;i++) {
    reversed = str[i] + reversed;
}
console.log(reversed);


/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

arr = [2,3,13,18,-5,38,10,11,0,104];
let arrEven = [];
let arrOdd = [];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 != 1 && arr[i] %2 != -1) {
//     arrEven.push(arr[i])
//   }
// }
// console.log(arrEven);
for (i = 0; i < arr.length; i++) {
    let remainder = arr[i] % 2
    if (remainder != 0) {
        arrOdd.push(arr[i]);
    } else {
        arrEven.push(arr[i]);
    }
}
console.log(arrEven);
console.log(arrOdd);