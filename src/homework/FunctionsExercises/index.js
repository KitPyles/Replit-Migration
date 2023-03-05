function makeLine(size) {
    let line = "";
    for (i = 0; i < size; i++) {
        line = line + "#";
    }
    return line;
}
// console.log(makeLine(4));

let str = ""
function makeSquare(size) {
    for (j = 0; j < size-1; j++){
        for (i = 0; i < size; i++) {
            str += makeLine(size) + "\n";
        }
    }
    str = str + makeLine(size);
    return str;
}

// console.log(makeSquare(5));

function makeRectangle(width, height) {
    for (j = 0; j < height-1; j++){
        for (i = 0; i < width; i++) {
            str += makeLine(width) + "\n";
        }
    }
    str = str + makeLine(width);
    return str;
}
// console.log(makeRectangle(6,4));

function makeSquare2(size) {
    makeRectangle(size,size);
    return str
}

// console.log(makeSquare2(5));

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
}
// console.log(makeDownwardStairs(4));

function makeSpaceLine(numSpaces, numChars) {
    let line = "";
    let lineChar = "";
    for (i = 0; i < numSpaces; i++) {
        line = line + " ";
    }
    for (i = 0; i < numChars; i++) {
        lineChar = lineChar + "#";
    }
    line = line + lineChar + line;
    return line;
}

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
}

// console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    let diamond = "";
// let height = 5
    for (let i = 0; i < height; i++) {
        diamond += (makeSpaceLine(height - i - 1, 2*i + 1) + "\n");
        // console.log(diamond);
    }
    for (let j = height; j > 0; j--) {
        diamond += (makeSpaceLine(height - j, 2*j -1) + "\n");
    }
    return diamond;
}
// console.log(makeDiamond(5));