class Command {
    constructor(commandType, value) {
        this.commandType = commandType;
        if (!commandType) {
            throw Error("Command type required.");
        }
        this.value = value;
        if(!value) {
            this.value = null;
        }
    }

}

module.exports = Command;