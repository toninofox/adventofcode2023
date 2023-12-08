const input = require('./input');

const numbers = { "one": "1", "two": "2", "three": "3", "four": "4", "five":"5", "six": "6", "seven": "7", "eight":"8", "nine": "9" }

const getNumber = value => numbers[value] ? numbers[value] : value;


const regex = /(one|two|three|four|five|six|seven|eight|nine|\d)/g



const resolve = () => {
    let res = 0
    const letters = Object.keys(numbers);
    const numb = Object.values(numbers);
    input.a.split("\n").forEach((line) => {
        const minIndex = letters.map((letter) => ({ letter, ix: line.indexOf(letter) })).filter((l) => l.ix > -1).sort((a, b) => a.ix - b.ix)[0]
        const maxIndex = letters.map((letter) => ({letter,ix:line.lastIndexOf(letter)})).filter((l) => l.ix > -1).sort((a, b) => b.ix - a.ix)[0]
        
        const last = digits.length > 1 ? digits[digits.length-1] : ""
        res += parseInt(""+getNumber(first)+getNumber(last))
        console.log(line, digits, parseInt(""+getNumber(first) + getNumber(last)))
    })
    console.log(res)
}

resolve()