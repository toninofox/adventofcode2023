const input = require('./input');

const numbers = { "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five":5, "six": 6, "seven": 7, "eight": 8, "nine": 9 }

const getNumber = value => numbers[value] ? numbers[value] : parseInt(value);

const regexNumbers = `(${Object.keys(numbers).join("|")}|\\d)`

const resolve = () => {
    let res = 0
    input.sample2.split("\n").forEach((line) => {
        const digits = new RegExp(regexNumbers, "g").exec(line)
        const first = digits[0];
        const last = digits[digits.length-1]
        res += getNumber(first)+getNumber(last)
    })
    console.log(res)
}

resolve()