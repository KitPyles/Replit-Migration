let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
let lang1 = language.slice(0,1);
let lang2 = language.slice(4,5);
let langAbbr = lang1 + lang2;
console.log(langAbbr);

//b) Without using .slice(), use method chaining to accomplish the same thing.

let indexJ = language.indexOf("J");
let indexS = language.indexOf("S");
console.log(`${indexJ}, ${indexS}`);
console.log(language.charCodeAt(0));
console.log(language.charCodeAt(4));
let codes = [74, 83];
let characters = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1]);
console.log(characters);


//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."

console.log(`The abbreviation for '${language}' is '${characters}'.`)

//d) Just for fun, try chaining 3 or more methods together, and then print the result.
//See above code?