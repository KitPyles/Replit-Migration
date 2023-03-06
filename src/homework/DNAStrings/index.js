let dna = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//a) Replace the gene "GCT" with "AGG", and then print the altered strand.

console.log(dna);
dna = dna.replace("GCT","AGG");
console.log(dna);

//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".

if (dna.indexOf("CAT") > -1) {
    console.log("CAT gene found");
} else {
    console.log("CAT gene NOT found");
}

//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.

dna = (dna.slice(0,16)) + (dna.slice(20,55));
console.log(dna);

//d) Use a template literal to print, "The DNA strand is ___ characters long."

strLen = dna.length;
console.log(`The DNA strand is ${strLen} characters long. `);

//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.

let joke1 = dna.slice(4,7);
let joke2 = dna.slice(36,39);
console.log(`${joke1.toLowerCase()}o ${joke2.toLowerCase()}`);