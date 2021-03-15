class logger {
    constructor(value, message) {
        this.value = value;
        this.message = message;
    }
}

exports.createLogEntry = (value, message) => {
    const log = new logger(value,message);
    return `Saved ${value} Log, with the Message: ${message}`
}
