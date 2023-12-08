const input = require('./input')

function isPartNumber(char) {
    return !isNaN(parseInt(char)) && char !== '.';
}

function sumPartNumbers(engineSchematic) {
    let sum = 0;
    for (let i = 0; i < engineSchematic.length; i++) {
        for (let j = 0; j < engineSchematic[i].length; j++) {
            const char = engineSchematic[i][j];
            if (isPartNumber(char)) {
                sum += parseInt(char);
            }
        }
    }
    return sum;
}

const engineSchematic = [
    '467..114..',
    '...*......',
    '..35..633.',
    '......#...',
    '617*......',
    '.....+.58.',
    '..592.....',
    '......755.',
    '...$.*....',
    '.664.598..',
];

const sum = sumPartNumbers(engineSchematic);
console.log(sum);

