// launchcode.spec.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

    it("should verify the value of launchcode.organization equals 'nonprofit'", function() {
        let launch = launchcode.launchcode;
        expect(launch.organization).toEqual("nonprofit");
    });

    it("should verify the value of launchcode.executiveDirector equals 'Jeff'", function() {
        let launch = launchcode.launchcode;
        expect(launch.executiveDirector).toEqual("Jeff");
    });

    it("should verify the value of launchcode.percentageCoolEmployees equals 100", function() {
        let launch = launchcode.launchcode;
        expect(launch.percentageCoolEmployees).toEqual(100);
    });

    it("should verify launchcode.programsOffered.length = 3 & checks the value", function() {
        let launch = launchcode.launchcode;
        expect(launch.programsOffered).toContain("LC101");
        expect(launch.programsOffered).toContain( "LaunchCode Women+");
        expect(launch.programsOffered).toContain("CodeCamp");
        expect(launch.programsOffered.length).toEqual(3);
    });

    it("returns 'Launch!' when given a number divisible ONLY by 2", function() {
        let result = launchcode.launchOutput(2);
        expect(result).toEqual('Launch!');
    });

    it("returns 'Code!' when given a number divisible ONLY by 3", function() {
        let result = launchcode.launchOutput(3);
        expect(result).toEqual('Code!');
    });

    it("returns 'Rocks!' when given a number divisible ONLY by 5", function() {
        let result = launchcode.launchOutput(5);
        expect(result).toEqual('Rocks!');
    });

    it("returns 'LaunchCode!' when given a number divisible by 2 AND 3", function() {
        let result = launchcode.launchOutput(6);
        expect(result).toEqual('LaunchCode!');
    });

    it("returns 'Code Rocks!' when given a number divisible by 3 AND 5", function() {
        let result = launchcode.launchOutput(15);
        expect(result).toEqual('Code Rocks!');
    });

    it("returns 'Launch Rocks! (CRASH!!!!)' when given a number divisible by 2 AND 5", function() {
        let result = launchcode.launchOutput(10);
        expect(result).toEqual('Launch Rocks! (CRASH!!!!)');
    });

    it("returns 'LaunchCode Rocks!' when given a number divisible by 2, 3, AND 5", function() {
        let result = launchcode.launchOutput(30);
        expect(result).toEqual('LaunchCode Rocks!');
    });

    it("returns 'Rutabagas! That doesn't work.' when given a number NOT divisible by 2, 3, OR 5", function() {
        let result = launchcode.launchOutput(17);
        expect(result).toEqual("Rutabagas! That doesn't work.");
    });

});