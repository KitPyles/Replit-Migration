const checkFive = require("../checkFive.js");

describe("checkFive", function(){

    it("checks if a number is less than 5", function(){
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.")
    });

    it("checks if a number equals 5", function () {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });

    it("checks if a number is greater than 5", function () {
        let output = checkFive(14);
        expect(output).toEqual("14 is greater than 5.");
    });

});