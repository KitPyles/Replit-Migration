//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuelLevel = 1;
let astronautCount = 1;
let shuttleAltitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

const input = require('readline-sync');

while (fuelLevel > 0) {
    fuelLevel = input.questionInt("Please, enter the starting fuel level: ");
    if (fuelLevel > 5000 && fuelLevel < 30000) {
        console.log("Thank you.");
        break;
    } else {
        console.log("This is not an acceptable Fuel Level.");
    }
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

while (astronautCount != 0) {
    astronautCount = input.questionInt("Please, enter the number of astronauts: ");
    if (astronautCount <= 7 && astronautCount > 0) {
        console.log("Thank you.");
        break;
    } else {
        console.log("This is not an acceptable number of astronauts.");
    }
}



//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (fuelLevel > (astronautCount * 100)) {
    fuelLevel -= (100 * astronautCount);
    shuttleAltitude += 50;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

console.log(`The shuttle gained an altitude of ${shuttleAltitude} km.`);

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${shuttleAltitude} km.`);

console.log((shuttleAltitude >= 2000) ? `Orbit achieved!` : `Failed to reach orbit.`);