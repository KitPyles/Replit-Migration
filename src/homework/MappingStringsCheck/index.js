let names = ["Chris", "Jim", "Sally", "Blake", "Paul"];

// TODO: Write a mapping function
// and pass it to .map()

let firstInit = function (str) {
    return str.slice(0,1);
}

let firstInitials = names.map(firstInit);

console.log(firstInitials);
// console.log(names[0].slice(0,1));