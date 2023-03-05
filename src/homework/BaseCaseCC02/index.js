//The following concept check assumes that only positive integers are passed to the function.

function factorial(integer){
    if (integer <= 0 || typeof integer !== "number") {
        console.log(`"${integer}" is not a valid entry.`);
    } else if (integer === 1){
        return integer;
    } else {
        return integer*(factorial(integer-1));
    }
}

console.log(factorial(0));

//Skill boost! Add validation to return an error message if the function is passed a string, negative number or a decimal value.