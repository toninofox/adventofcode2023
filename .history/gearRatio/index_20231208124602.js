const input = require('./input')

const getNumbers = (str) => [...str.matchAll(/\d+/g)].map((n) => ({v:n[0],i:n.index}));
const getSymbols = (str) => [...str.matchAll(/[^0-9.]+/g)].map((n) => n.index);

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

const isValidRange = (symbols,n) => symbols.some(s => {
    const validRanges = [n.i - 1, n.v.length + 1];
    return s >= validRanges[0] && s <= validRanges[1];
})

const sum = ()=>{
    const lines = input.sample.split('\n');
    lines.forEach((line, i) => {
       const numbers = getNumbers(line);
        const prevSymb = lines[i - 1] ? getSymbols(lines[i - 1]) : [];
        const nextSymb = lines[i + 1] ? getSymbols(lines[i + 1]) : [];
        numbers.filter(n => isValidRange(prevSymb,n) || isValidRange(nextSymb,n) )
        .forEach(console.log)
    
    });
}
sum()

