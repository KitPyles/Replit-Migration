// Code your crewMass function here:

function crewMass (arr) {
    let totalCrewMass = 0;
    for (i = 0; i < arr.length; i++) {
        totalCrewMass += arr[i].mass;
    }
    totalCrewMass = (Math.round(totalCrewMass)*10)/10
    return totalCrewMass;
}

// Code your fuelRequired function here:

function requiredFuel (arr) {
    let totalMass = (crewMass(arr)) + 75000;
    let reqFuel = totalMass * 9.5;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].specises === "dog") {
            reqFuel += 200;
        } else if (arr[i].species === "cat") {
            reqFuel += 200;
        } else {
            reqFuel += 100;
        }
    }
    reqFuel = Math.ceil(reqFuel);
    return console.log(`The mission has a launch mass of ${totalMass} kg and requires ${reqFuel} kg of fuel.'`);
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
    'name':'Gordon Shumway',
    'species':'alf',
    'mass':90,
    'o2Used':function(hrs){return 0.035*hrs},
    'astronautID':414
};
let candidateB = {
    'name':'Lassie',
    'species':'dog',
    'mass':19.1,
    'o2Used':function(hrs){return 0.030*hrs},
    'astronautID':503
};
let candidateC = {
    'name':'Jonsey',
    'species':'cat',
    'mass':3.6,
    'o2Used':function(hrs){return 0.022*hrs},
    'astronautID':796
};
let candidateD = {
    'name':'Paddington',
    'species':'bear',
    'mass':31.8,
    'o2Used':function(hrs){return 0.047*hrs},
    'astronautID':291
};
let candidateE = {
    'name':'Pete',
    'species':'tortoise',
    'mass':417,
    'o2Used':function(hrs){return 0.010*hrs},
    'astronautID':599
};
let candidateF = {
    'name':'Hugs',
    'species':'ball python',
    'mass':2.3,
    'o2Used':function(hrs){return 0.018*hrs},
    'astronautID':890
};

let candidates = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let crew = [candidateA,candidateB,candidateC];

requiredFuel(crew);