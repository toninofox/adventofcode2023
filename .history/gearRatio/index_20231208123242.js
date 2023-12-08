const input = require('./input')

const getNumbers = (str) => [...str.matchAll(/\d+/g)].map((n) => parseInt(n[0]));

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

const sum = ()=>{
    input.sample.split('\n').forEach((line, i) => {
        console.log(getNumbers(line))
    });
}
sum()

