let fuelLevel = 200000;
let fuel = function(level) {
    if (checkFuel(level) === "green") {
        return level = 100001;
    } else if (checkFuel(level) === "yellow") {
        return level = 50001;
    } else {
        return level;
    }
}

function checkFuel(level) {
    if (level > 100000) {
        return 'green';
    } else if (level > 50000) {
        return 'yellow';
    } else {
        return 'red';
    }
}

function holdStatus(arr) {
    if (arr.length < 7) {
        return `Spaces available: ${7 - arr.length}.`;
    } else if (arr.length > 7) {
        return `Over capacity by ${arr.length - 7} items.`;
    } else {
        return "Full";
    }
}

let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];
let hold = [];
let mopHold = function(arr) {
    hold.push(arr[arr.indexOf('gold')]);
    arr.splice(arr.indexOf('gold'), 1);
    arr.unshift('MREs');
    hold.push(arr[arr.indexOf('AE-35 unit')]);
    arr.splice(arr.indexOf('AE-35 unit'), 1);
    arr.unshift('rations');
    return hold;
}

let irs = function(level, arr) {
    fuelLevel = fuel(fuelLevel);
    let savedArr = mopHold(arr)
    return `Raided ${level - fuel(level)} kg of fuel from the tanks, and stole ${savedArr[0]} and ${savedArr[1]} from the cargo hold.`;
}
console.log(irs(fuelLevel, cargoHold));
console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));
// console.log(fuelLevel);
// console.log(cargoHold);