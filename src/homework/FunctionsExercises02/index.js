//6) The area of a rectangle is equal to its length x width.

//Define a function and the required parameters to calculate the area of a rectangle.
//The function should return the area, NOT print it.

// function calculateAreaOfRectangle (height, width) {
//   let area = height * width;
//   return area;
// }

//If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.

function calculateAreaOfRectangle (height, width) {
    let area = "";
    // console.log(width);
    if (width >= 0) {
        area = height * width;
    } else {
        area = height * height;
    }
    return area;
}

// console.log(calculateAreaOfRectangle(4,3));

//Call your area function, then use a template literal to print, “The area is ____ cm^2.”

console.log(`The area is ${calculateAreaOfRectangle(4)} cm^2.`);