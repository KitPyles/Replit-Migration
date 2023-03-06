let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";
let protoArray11;
let protoArray21;
let protoArray31;
let protoArray41;
let protoArray12;
let protoArray22;
let protoArray32;
let protoArray42;
let protoArray13;
let protoArray23;
let protoArray33;
let protoArray43;
let protoArray14;
let protoArray24;
let protoArray34;
let protoArray44;

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//b)
function reverseCommas() {
    //TODO: 1. create and instantiate your variables.
    let check;
    let output;
    //TODO: 2. write the code required for this step

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
    output = [protoArray11,protoArray21,protoArray31,protoArray41];
    //NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
    return output;
}

//c)
function semiDash() {
    let check;
    let output;
//TODO: write the code required for this step

    if (protoArray1.includes(";")) {
        protoArray12 = protoArray1.split(";").reverse().join(",");
    } else {
        protoArray12 = protoArray11;
    }
    if (protoArray2.includes(";")) {
        protoArray22 = protoArray21.split(";").reverse().join(",");
    } else {
        protoArray22 = protoArray21;
    }
    if (protoArray3.includes(";")) {
        protoArray32 = protoArray31.split(";").reverse().join(",");
    } else {
        protoArray32 = protoArray31;
    }
    if (protoArray4.includes(";")) {
        protoArray42 = protoArray41.split(";").reverse().join(",");
    } else {
        protoArray42 = protoArray41;
    }
    output = [protoArray12,protoArray22,protoArray32,protoArray42];
    return output;
}

//d)
function reverseSpaces() {
    let check;
    let output;
    //TODO: write the code required for this step

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
    if (protoArray42.includes(" ") && !protoArray42.includes(" ")) {
        protoArray43 = protoArray42.split(",").reverse().join(",");
    } else {
        protoArray43 = protoArray42;
    }
    output = [protoArray13,protoArray23,protoArray33,protoArray43];
    return output;
}

//e)
function commaSpace() {
    let check;
    let output;
    //TODO: write the code required for this step

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
    output = [protoArray14,protoArray24,protoArray34,protoArray44];
    return output;
}


// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
    strings : strings,
    reverseCommas : reverseCommas,
    semiDash: semiDash,
    reverseSpaces : reverseSpaces,
    commaSpace : commaSpace
};