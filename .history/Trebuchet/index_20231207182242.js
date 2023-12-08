const input = require('./input');

const numbers = { "one": "1", "two": "2", "three": "3", "four": "4", "five":"5", "six": "6", "seven": "7", "eight":"8", "nine": "9" }

const getNumber = value => numbers[value] ? numbers[value] : value;


const regex = /(one|two|three|four|five|six|seven|eight|nine|\d)/g

function getMatches(string, index=1) {
    var matches = [];
    var match;
    var lastindex;
    while (match = regex.exec(string)) {
        matches.push(match[index]);
        lastindex = match.lastIndex;
    }
    return { matches, lastindex };
}

const resolve = () => {
    let res = 0
    input.a.split("\n").forEach((line) => {
        const start = line.indexOf("one|two|three|four|five|six|seven|eight|nine")
        const end = line.lastIndexOf("one|two|three|four|five|six|seven|eight|nine")
        const first = digits[0];
        const last = digits.length > 1 ? digits[digits.length-1] : ""
        res += parseInt(""+getNumber(first)+getNumber(last))
        console.log(line, digits, parseInt(""+getNumber(first) + getNumber(last)))
    })
    console.log(res)
}

resolve()