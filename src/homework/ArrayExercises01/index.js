//Create an array that can hold 4 items name practiceFile.

let practiceFile = [
    [626,1701,451],
    ["Danger, Will Robinson!","Make it so!","Ohana means family."]
];
console.log(practiceFile);

//Use the bracket notation method to add "42" and "hello" to the array. Add these new items one at a time.  Print the array after each step to confirm the changes.

practiceFile[0].push(42);
console.log(practiceFile);
practiceFile[1].push("hello");
console.log(practiceFile);

//Use a SetValue to add the items "false", and "-4.6", and “87” to the array.  Print the array to confirm the changes.

practiceFile.push("false","-4.6","87");
console.log(practiceFile);