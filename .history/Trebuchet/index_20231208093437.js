const input = require('./input');

const numbers = { "one": "1", "two": "2", "three": "3", "four": "4", "five":"5", "six": "6", "seven": "7", "eight":"8", "nine": "9" }

const getNumber = value => numbers[value] ? numbers[value] : value;


const regex = /(one|two|three|four|five|six|seven|eight|nine|\d)/g



const resolve = () => {
    let res = 0
    const letters = Object.keys(numbers);
    const numb = Object.values(numbers);
    const keywords = letters.concat(numb)
    input.a.split("\n").forEach((line) => {
        const minIndex = keywords.map((letter) => ({ letter, ix: line.indexOf(letter) })).filter((l) => l.ix > -1).sort((a, b) => a.ix - b.ix)[0]
        const maxIndex = keywords.map((letter) => ({letter,ix:line.lastIndexOf(letter)})).filter((l) => l.ix > -1).sort((a, b) => b.ix - a.ix)[0]
        
        const first = minIndex.letter;
        const last = minIndex.ix !== maxIndex.ix ? maxIndex.letter : ""
        res += parseInt(""+getNumber(first)+getNumber(last))
        console.log(line, first,last, parseInt(""+getNumber(first) + getNumber(last)))
    })
    console.log(res)
}

resolve()