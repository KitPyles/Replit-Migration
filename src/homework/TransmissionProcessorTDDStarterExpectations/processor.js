function processor (transmission) {
    let splitTransmission = transmission.split("::");
    let id = splitTransmission[0];
    let rawData = splitTransmission[1];

    if (!transmission.includes("::")) {
        return -1;
    } else if (splitTransmission.length >2) {
        return -1;
    }
    if (rawData[0] !== '<') {
        rawData = -1;
    } else if (rawData[rawData.length-1] !== '>') {
        rawData = -1;
    } else if (rawData.slice(1).includes('<') === true) {
        rawData = -1;
    } else if (rawData.slice(0,rawData.length-2).includes('>') === true) {
        rawData = -1;
    } else if (isNaN((Number(id)))) {
        id = -1;
    } else if (rawData !== -1) {
        rawData = Number(rawData.slice(1,rawData.length-1));
    }
    if (isNaN(rawData)) {
        rawData = -1;
    }
    return {
        id: Number(id),
        rawData: rawData
    };
}

module.exports = processor;