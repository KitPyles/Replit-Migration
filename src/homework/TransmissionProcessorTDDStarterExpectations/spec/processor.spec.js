const processor = require('../processor.js');

describe("transmission processor", function() {

    it("takes a string and returns an object", function(){
        let result = processor("9701::<489584872710>");
        expect(typeof result).toEqual("object");
    });

    it("returns -1 if '::' not found", function () {
        let result = processor("9701<489584872710>");
        expect(result).toEqual(-1);
    });

    it("returned object contains 'id' property", function(){
        let result = processor("9701::<489584872710>");
        expect(result.id).not.toEqual(undefined);
    });

    it("'id' property is a Number", function(){
        let result = processor("9701::<489584872710>");
        expect(result.id).toEqual(9701);
    });

    it("returns -1 if 'id' cannot be converted to a Number", function() {
        let result = processor("ID::<489584872710>");
        expect(result.id).toEqual(-1);
    });

    it("returned object contains 'rawData' property", function(){
        let result = processor("9701::<489584872710>");
        expect(result.rawData).not.toEqual(undefined);
    });

    it("returns -1 if 'rawData' cannot be converted to a Number", function() {
        let result = processor("9701::<4895848a72710>");
        expect(result.rawData).toEqual(-1);
    });

    it("returns -1 if rawData does not start with '<'", function () {
        let result = processor("9701::489584872710>");
        expect(result.rawData).toEqual(-1);
    });

    // it("returns -1 if rawData does not end with '>'", function () {
    //   let result = processor("9701::<489584872710");
    //   expect(result.rawData).toEqual(-1);
    // });

    // it("returns -1 if rawData does not start & end with '<' & '>'", function () {
    //   let result = processor("9701::489584872710");
    //   expect(result.rawData).toEqual(-1);
    // });

    it("returns -1 if rawData has '<' in wrong place", function () {
        let result = processor("9701::4895<84872710>");
        expect(result.rawData).toEqual(-1);
    });

    it("returns -1 if rawData has '>' in wrong place", function () {
        let result = processor("9701::<48958487>2710");
        expect(result.rawData).toEqual(-1);
    });

    it("trims whitespace from beginning of transmission", function () {
        let result = processor(" 9701::<489584872710> ");
        expect(result.id).not.toEqual(" 9701");
    });

    it("trims whitespace from end of transmission", function () {
        let result = processor(" 9701::<489584872710> ");
        expect(result.rawData).not.toEqual("<489584872710> ");
    });

    it("returns -1 if transmission includes more than one '::'", function () {
        let results = processor("9701::::<489584872710>");
        expect(results).toEqual(-1);
    });

    it("excludes '<' and '>' from 'rawData'", function () {
        let result = processor("9701::<489584872710>");
        expect(result.rawData).toEqual(489584872710);
    });

});