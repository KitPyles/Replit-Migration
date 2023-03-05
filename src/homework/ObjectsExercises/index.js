let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5
};

let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6
};

let beagle = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5
};

let tardigrade = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1
};

let IDs = [1,2,3,4,5,6,7,8,9,10];
function createAstronautIDs () {
    n = Math.ceil(Math.random() * 10);
    if (IDs.includes(n)){
        IDs.splice(IDs.indexOf(n),1);
        return n;
    } else {
        return createAstronautIDs();
    }
}

// After you have created the other object literals, add the astronautID property to each one.

superChimpOne["astronautID"] = createAstronautIDs()
salamander["astronautID"] = createAstronautIDs()
superChimpTwo["astronautID"] = createAstronautIDs()
beagle["astronautID"] = createAstronautIDs()
tardigrade["astronautID"] = createAstronautIDs()

superChimpOne.move = function() {return Math.round(Math.random() * 10)}
salamander.move = function() {return Math.round(Math.random() * 10)}
superChimpTwo.move = function() {return Math.round(Math.random() * 10)}
beagle.move = function() {return Math.round(Math.random() * 10)}
tardigrade.move = function() {return Math.round(Math.random() * 10)}

// Create an array to hold the animal objects.

let crew = [superChimpOne,salamander,superChimpTwo,beagle,tardigrade];

// Print out the relevant information about each animal.

function crewReports (arr) {
    for (j = 0; j < arr.length; j++){
        console.log(`${arr[j].name} is a ${arr[j].species}. They are ${arr[j].age} years old and ${arr[j].mass} kilograms. Their ID is ${arr[j].astronautID}.`);
    }
}
crewReports(crew);

// Start an animal race!

function fitnessTest (arr) {
    let results = [], steps, turns;
    for (let i = 0; i < arr.length; i++){
        steps = 0;
        turns = 0;
        while (steps < 20){
            steps += arr[i].move();
            turns++;
        }
        results.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
    }
    return results;
}

console.log(fitnessTest(crew));