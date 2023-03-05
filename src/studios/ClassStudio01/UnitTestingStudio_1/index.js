let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["LC101", "LaunchCode Women+", "CodeCamp"],
    method: launchOutput
}

function launchOutput(num) {
    let div2 = "Launch";
    let div3 = "Code";
    let div5 = "Rocks";
    if (num % 30 === 0) {
        return `${div2}${div3} ${div5}!`;
    } else if (num % 15 === 0) {
        return `${div3} ${div5}!`;
    } else if (num %10 === 0) {
        return `${div2} ${div5}! (CRASH!!!!)`
    } else if (num % 6 === 0) {
        return `${div2}${div3}!`;
    } else if (num % 5 === 0) {
        return `${div5}!`;
    } else if (num % 2 === 0 ) {
        return `${div2}!`;
    } else if (num % 3 === 0) {
        return `${div3}!`;
    } else {
        return "Rutabagas! That doesn't work.";
    }
};

module.exports = {
    launchcode,
    launchOutput
}