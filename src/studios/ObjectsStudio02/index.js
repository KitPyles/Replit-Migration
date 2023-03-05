// Code your orbitCircumference function here:

function orbitCircumference (r) {
    let c = 2 * Math.PI * r;
    c = Math.round(c);
    return c;
}
// console.log(orbitCircumference(2000));

// Code your missionDuration function here:

function missionDuration (numOrbits, r, orbitSpeed) {
    if (r >= 2000) {
        r = r;
    } else {
        r = 2000;
    }
    if (orbitSpeed >= 28000) {
        orbitSpeed = orbitSpeed;
    } else {
        orbitSpeed = 28000;
    }
    c = orbitCircumference(r);
    let distance = c * numOrbits;
    let time = distance / orbitSpeed;
    time = (Math.round(time * 100))/100;
    console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`);
    return time;
}
// missionDuration(5,0,39000);

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry () {
    let idNumbers = [291, 414, 503, 599, 796, 890];
    let crewIDs = [];
    let multi = 6;
    while (crewIDs.length < 3) {
        let n = Math.floor(Math.random() * multi);
        crewIDs.push(idNumbers[n]);
        idNumbers.splice(n,1);
        multi -= 1.2;
    }
    return crewIDs;
}
// console.log(selectRandomEntry());

// Candidate data & crew array.
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

let crew = [candidateA,candidateC,candidateE];
let candidates = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your oxygenExpended function here:

function oxygenExpended () {
    let crewID = Number(selectRandomEntry()[0]);
    let crewO2 = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
    let obj;
    for (i = 0; i < crewO2.length; i++) {
        obj = crewO2[i];
        if (obj.astronautID === crewID) {
            break;
        }
    }
    let time = missionDuration(3,2500,30000);
    let oxygen = (Math.round(obj.o2Used(time)*1000))/1000;
    console.log(`${obj.name} will perform the spacewalk, which will last ${time} hours and require ${oxygen} kg of oxygen.`);
}
// oxygenExpended();

function crewMinMass(obj){
    let min = obj[0].mass;
    let ID = obj[0];
    for (i = 0; i < obj.length; i++){
        if (obj[i].mass < min){
            min = obj[i].mass;
            ID = obj[i];
        }
    }
    let time = missionDuration(3,2500,30000);
    let oxygen = (Math.round(ID.o2Used(time)*1000))/1000;
    console.log(`${ID.name} will perform the spacewalk, which will last ${time} hours and require ${oxygen} kg of oxygen.`);
    return ID;
}
crewMinMass(candidates);