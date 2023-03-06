//String methods can be combined in a process called method chaining.

let word = '  JavaScript  ';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?
console.log(word.slice(4).toUpperCase());
console.log(word.replace("a", "o").trim());
// console.log(word.trim());
//Experiment with other combinations (chains) of string methods.