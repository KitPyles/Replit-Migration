const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let strRem = str.slice(0,3);
// console.log(strRem);
str = str.slice(3,10);
// console.log(str + strRem);

//Use a template literal to print the original and modified string in a descriptive phrase.

// console.log(`"${strRem}${str}" is the name of the company running this program. Meanwhile, "${str}${strRem}" is just silly. LOL!`)

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

str = "LaunchCode"
let strInput = input.questionInt("Please enter the number of characters to move: ");

// strRem = str.slice(0,strInput);
// str = str.slice(strInput,10);
// console.log(`"${strRem}${str}" is the name of the company running this program. Meanwhile, "${str}${strRem}" is just silly. LOL!`);

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

let strL = str.length

if (strInput >= 0 && strInput <= str.length) {
    strRem = str.slice(0,strInput);
    str = str.slice(strInput,str.length);
    console.log(`"${strRem}${str}" is the name of the company running this program. Meanwhile, "${str}${strRem}" is just silly. LOL!`);
} else {
    strInput = 3;
    strRem = str.slice(0,strInput);
    str = str.slice(strInput,str.length);
    console.log(`You enterred an invalid option. The default is 3, which results in the statement: "${strRem}${str}" is the name of the company running this program. Meanwhile, "${str}${strRem}" is just silly. LOL!`);
}