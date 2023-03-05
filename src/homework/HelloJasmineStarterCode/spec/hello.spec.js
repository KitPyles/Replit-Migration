const hello = require('../hello.js');

describe("hello", function(){

    it("should return custom message when name is specified", function(){
        expect(hello("Jasmine")).toEqual("Hello, Jasmine!");
    });

    it("should return a general greeting when name is not specified", function(){
        expect(hello()).toEqual("Hello, World!");
    });

});