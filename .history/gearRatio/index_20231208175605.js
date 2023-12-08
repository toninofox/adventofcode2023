const input = require('./input')

const getNumbers = (str) => [...str.matchAll(/\d+/g)].map((n) => ({v:n[0],i:n.index}));
const getSymbols = (str) => [...str.matchAll(/[^0-9.]+/g)].map((n) => n.index);


const isValidRange = (symbols,n) => symbols.some(s => {
    const validRanges = [n.i - 1, n.i + n.v.length];
    return validRanges.some(r=> r === s);
})

function getAdjacentChars(matrix, row, col) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const adjacentChars = [];

    // Check top
    if (row > 0) {
        adjacentChars.push(matrix[row - 1][col]);
    }

    // Check bottom
    if (row < rows - 1) {
        adjacentChars.push(matrix[row + 1][col]);
    }

    // Check left
    if (col > 0) {
        adjacentChars.push(matrix[row][col - 1]);
    }

    // Check right
    if (col < cols - 1) {
        adjacentChars.push(matrix[row][col + 1]);
    }

    return adjacentChars;
}


const sumM = () => {
    const lines = input.sample.split('\n');
    let res = 0
    lines.forEach((line, i) => {
        const matrix = lines[i - 1] ? lines[i - 1].split("") : []
        const numbers = getNumbers(line);
        const prevSymb = lines[i - 1] ? getSymbols(lines[i - 1]) : [];
}

const sum = ()=>{
    const lines = input.sample.split('\n');
    let res = 0
    lines.forEach((line, i) => {
       const numbers = getNumbers(line);
        const prevSymb = lines[i - 1] ? getSymbols(lines[i - 1]) : [];
        const currentSymb = getSymbols(lines[i]) ;
        const nextSymb = lines[i + 1] ? getSymbols(lines[i + 1]) : [];
        console.log(numbers, prevSymb, currentSymb.map(c=>lines[i-1].charAt(c)), nextSymb, numbers.filter(n=>isValidRange(prevSymb, n) || isValidRange(currentSymb, n) || isValidRange(nextSymb, n)).map(v=>parseInt(v.v)))
        numbers.filter(n=> isValidRange(prevSymb, n)|| isValidRange(currentSymb, n)|| isValidRange(nextSymb, n)).map(v=>parseInt(v.v)).forEach(r=> res+=r)
    });
    console.log(res)
}
sum()

