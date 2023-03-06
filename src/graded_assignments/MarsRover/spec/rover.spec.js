const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

    // test 1/7
    it("constructor sets position and default values for mode and generatorWatts", function() {
        let tester = new Rover('test1');
        expect(tester.position).toEqual('test1');
        expect(tester.mode).toEqual('NORMAL');
        expect(tester.generatorWatts).toEqual(110);
    });

    // test 2/7
    it("response returned by receiveMessage contains name of message", function() {
        let msg = new Message('test1', ['test2']);
        let tester = new Rover(94895);
        let result = tester.receiveMessage(msg);
        expect(tester.name).toEqual(msg.name);
    });

    // test 3/7
    it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
        let commands = ['STATUS_CHECK', ['MODE_CHANGE', 'LOW_POWER']];
        let msg = new Message('test1', ['STATUS_CHECK', ['MODE_CHANGE', 'LOW_POWER']]);
        let tester = new Rover(94895);
        let result = tester.receiveMessage(msg);
        expect(result.results.length).toEqual(commands.length);
    });

    // test 4/7
    it("responds correctly to status check command", function() {
        let msg = new Message('test1', ['STATUS_CHECK']);
        let tester = new Rover(94895);
        let result = tester.receiveMessage(msg);
        let statusObj = {
            completed: tester.completed,
            roverStatus: `{mode: ${tester.mode}, generatorWatts: ${tester.generatorWatts}, position: ${tester.position}}`
        };
        let statusArr = [statusObj];
        expect(result.results).toEqual(statusArr);
    });

    // test 5/7
    it("responds correctly to mode change command", function() {
        let msg = new Message('test1', [['MODE_CHANGE', 'LOW_POWER']]);
        let tester = new Rover(94895);
        let result = tester.receiveMessage(msg);
        let modeObj = { completed: tester.completed };
        let modeArr = [modeObj];
        expect(tester.mode).toEqual('LOW_POWER');
    });

    // test 6/7
    it("responds with false completed value when attempting to move in LOW_POWER mode", function() {
        let msg = new Message('test1', [['MODE_CHANGE', 'LOW_POWER'], ['MOVE', 957882]]);
        let tester = new Rover(94895);
        let result = tester.receiveMessage(msg);
        let lowPowerMove = {
            completed: false,
            position: tester.position
        };
        expect(result.results[1]).toEqual(lowPowerMove);
    });

    // test 7/7
    it("responds with position for move command", function() {
        let msg = new Message('test1', [['MOVE', 95788]]);
        let tester = new Rover(94895);
        let result = tester.receiveMessage(msg);
        expect(tester.position).toEqual(95788);
    });

});