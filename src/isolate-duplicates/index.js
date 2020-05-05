function isolateDuplicates(text) {
    let countDuplicates = 0
    let output = "";
    let stringCount = {};

    for (let char of text) {
        if (stringCount[char]) {
            stringCount[char] += 1
        } else {
            stringCount[char] = 1;
        }
    }

    for (let char in stringCount) {
        if (stringCount[char] <= 2) {
            output += char.repeat(stringCount[char]);
        } else {
            countDuplicates++;
            output += char + char + "[" + char.repeat(stringCount[char] - 2) + "]";
        }
    }

    return "[" + output + "," + countDuplicates + "]";
}

module.exports = isolateDuplicates;
