const rps = require("../RPS.js");

describe (rps, function(){

    it("checks if players tied with same choice", function() {
        let result = rps('rock','rock');
        expect(result).toEqual('TIE!');
    });

    it("checks if player2 wins with 'paper'", function() {
        let result = rps('rock','paper');
        expect(result).toEqual('Player 2 wins!');
    });

    it("checks if player2 won with 'scissors'", function() {
        let result = rps('paper','scissors');
        expect(result).toEqual('Player 2 wins!');
    });

    it("checks if player2 won with 'rock'", function() {
        let result = rps('scissors','rock');
        expect(result).toEqual('Player 2 wins!');
    });

    it("checks that only 'rock', 'paper', or 'scissors' are enterred", function() {
        let result = rps('stone','paper');
        expect(result).toEqual('That is not a valid choice.');
    });

});