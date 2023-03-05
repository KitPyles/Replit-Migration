function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
a) Define a new, empty array to hold the final sorted numbers.
b) Use the findMinValue function to find the minimum value in the old array.
c) Add the minimum value to the new array, and remove the minimum value from the old array.
d) Repeat parts b & c until the old array is empty.
e) Return the new sorted array.
f) Be sure to print the results in order to verify your code.*/

//Your function here...

let newArr = [];


function sortSmLrg (arr) {
    if (arr.length === 1) {
        newArr.push(arr[0]);
        arr.splice(0,1);
        // console.log(arr);
        return newArr;
    } else {
        n = findMinValue(arr);
        a = arr.indexOf(n);
        newArr.push(n);
        arr.splice(a,1);
        return sortSmLrg(arr);
    }
    return newArr;
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// I created a variable to hold a copy of the array, so that if I need the original order at a later point, it's still readily available.
let sort = nums3.slice(0,nums3.length);
console.log(sortSmLrg(sort));