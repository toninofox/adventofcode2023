const input = require('./input');

const numbers = { "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five":5, "six": 6, "seven": 7, "eight": 8, "nine": 9
}

const getDigit = 

const resolve = () => {
    let res = 0
    input.in.split("\n").forEach((line) => {
       const digits = line.split("").filter(c=> /\d+/.test(c))
        res += parseInt(""+digits[0]+digits[digits.length-1])
    })
    console.log(res)
}

resolve()