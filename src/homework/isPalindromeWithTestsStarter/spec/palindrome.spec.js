const isPalindrome = require('../palindrome.js');

describe("isPalindrome", function(){

    it("should return true for a single letter", function(){
        expect(isPalindrome("a")).toBeTrue();
    });

    it("should return true for a single letter repeated", function(){
        expect(isPalindrome("aaa")).toBeTrue();
    });

    it("should return true for a simple palindrome", function(){
        expect(isPalindrome("aba")).toBeTrue();
    });

    it("should return true for a longer palindrome", function(){
        expect(isPalindrome("racecar")).toBeTrue();
    });

    it("should return false for a longer non-palindrome", function(){
        expect(isPalindrome("launchcode")).toBeFalse();
    });

    it("should return false for a simple non-palindrome", function(){
        expect(isPalindrome("ab")).toBeFalse();
    });

    it("should be case-sensitive", function(){
        expect(isPalindrome("abA")).toBeFalse();
    });

    it("should consider whitespace", function(){
        expect(isPalindrome("so many dynamos")).toBeFalse();
    });

    it("should consider the empty string a palindrome", function(){
        expect(isPalindrome("")).toBeTrue();
    });

});