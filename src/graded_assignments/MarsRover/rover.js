class Rover {
    constructor(position) {
        this.position = position;
        this.mode = 'NORMAL';
        this.generatorWatts = 110;
    }
    receiveMessage (msg) {
        this.name = msg.name
        let resultsObj = {
            message: this.name,
            results: []
        };
        let comm = msg.commands;
        let len = comm.length;
        for (let i = 0; i < len; i++) {
            if (comm[i][0] === 'MOVE') {
                if (this.mode === 'LOW_POWER') {
                    this.completed = false;
                } else {
                    this.position = comm[i][1];
                    this.completed = true;
                }
                let moveObj = {
                    completed: this.completed,
                    position: this.position
                };
                resultsObj.results.push(moveObj);
            } else if (comm[i] === 'STATUS_CHECK') {
                this.completed = true;
                let statusObj = {
                    completed: this.completed,
                    roverStatus: `{mode: ${this.mode}, generatorWatts: ${this.generatorWatts}, position: ${this.position}}`
                };
                resultsObj.results.push(statusObj);
            } else {
                this.mode = comm[i][1];
                this.completed = true;
                let modeObj = { completed: this.completed };
                resultsObj.results.push(modeObj);
            }
        }
        return resultsObj;
    }
}

module.exports = Rover;