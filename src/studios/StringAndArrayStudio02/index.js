let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.

// console.log(",: " + protoArray1.includes(","));
// console.log(",: " + protoArray2.includes(","));
// console.log(",: " + protoArray3.includes(","));
// console.log(",: " + protoArray4.includes(","));
// console.log(",: " + protoArray1.includes(";"));
// console.log(";: " + protoArray2.includes(";"));
// console.log(";: " + protoArray3.includes(";"));
// console.log(";: " + protoArray4.includes(";"));
// console.log(" : " + protoArray1.includes(" "));
// console.log(" : " + protoArray2.includes(" "));
// console.log(" : " + protoArray3.includes(" "));
// console.log(" : " + protoArray4.includes(" "));

//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.

let protoArray11;
let protoArray21;
let protoArray31;
let protoArray41;

if (protoArray1.includes(",") && !protoArray1.includes(" ")) {
    protoArray11 = protoArray1.split(",").reverse().join(",");
} else {
    protoArray11 = protoArray1;
}
if (protoArray2.includes(",") && !protoArray2.includes(" ")) {
    protoArray21 = protoArray2.split(",").reverse().join(",");
} else {
    protoArray21 = protoArray2;
}
if (protoArray3.includes(",") && !protoArray31.includes(" ")) {
    protoArray31 = protoArray3.split(",").reverse().join(",");
} else {
    protoArray31 = protoArray3;
}
if (protoArray4.includes(",") && !protoArray4.includes(" ")) {
    protoArray41 = protoArray4.split(",").reverse().join(",");
} else {
    protoArray41 = protoArray4;
}

//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.
let protoArray12;
let protoArray22;
let protoArray32;
let protoArray42;

if (protoArray11.includes(";")) {
    protoArray12 = protoArray11.split(";").reverse().join(",");
} else {
    protoArray12 = protoArray11;
}
if (protoArray21.includes(";")) {
    protoArray22 = protoArray21.split(";").reverse().join(",");
} else {
    protoArray22 = protoArray21;
}
if (protoArray31.includes(";")) {
    protoArray32 = protoArray31.split(";").reverse().join(",");
} else {
    protoArray32 = protoArray31;
}
if (protoArray41.includes(";")) {
    protoArray42 = protoArray41.split(";").reverse().join(",");
} else {
    protoArray42 = protoArray41;
}

//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.

let protoArray13;
let protoArray23;
let protoArray33;
let protoArray43;

if (protoArray12.includes(" ") && !protoArray12.includes(",")) {
    protoArray13 = protoArray12.split(" ").reverse().join(",");
} else {
    protoArray13 = protoArray12;
}
if (protoArray22.includes(" ") && !protoArray22.includes(",")) {
    protoArray23 = protoArray22.split(" ").reverse().join(",");
} else {
    protoArray23 = protoArray22;
}
if (protoArray32.includes(" ") && !protoArray32.includes(",")) {
    protoArray33 = protoArray32.split(" ").reverse().join(",");
} else {
    protoArray33 = protoArray32;
}
if (protoArray42.includes(" ") && !protoArray42.includes(",")) {
    protoArray43 = protoArray42.split(" ").reverse().join(",");
} else {
    protoArray43 = protoArray42;
}

//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.

let protoArray14;
let protoArray24;
let protoArray34;
let protoArray44;

if (protoArray13.includes(", ")) {
    protoArray14 = protoArray13.split(", ").reverse().join(",");
} else {
    protoArray14 = protoArray13;
}
if (protoArray23.includes(", ")) {
    protoArray24 = protoArray23.split(", ").reverse().join(",");
} else {
    protoArray24 = protoArray23;
}
if (protoArray33.includes(", ")) {
    protoArray34 = protoArray33.split(", ").reverse().join(",");
} else {
    protoArray34 = protoArray33;
}
if (protoArray43.includes(", ")) {
    protoArray44 = protoArray43.split(", ").reverse().join(",");
} else {
    protoArray44 = protoArray43;
}

strings = [protoArray14,protoArray24,protoArray34,protoArray44];
console.log(strings);