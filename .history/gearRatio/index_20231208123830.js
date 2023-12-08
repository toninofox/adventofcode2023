const input = require('./input')

const getNumbers = (str) => [...str.matchAll(/\d+/g)].map((n) => ({v:parseInt(n[0]),i:n.index}));
const getSymbols = (str) => [...str.matchAll(/[^0-9.]+/g)].map((n) => n.index));

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
       const numbers = getNumbers(line);

    });
}
sum()

