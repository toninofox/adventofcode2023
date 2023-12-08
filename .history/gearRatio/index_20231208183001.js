const input = require('./input')

const getNumbers = (str) => [...str.matchAll(/\d+/g)].map((n) => ({v:n[0],i:n.index}));
const getSymbols = (str) => [...str.matchAll(/[^0-9.]+/g)].map((n) => n.index);


const isValidRange = (symbols,n,line) => symbols.some(s => {
    const endRow = n.i > 0 ? -1 : line.length - 1;
    const startRow = n.i + n.v.length < line.length ? -1 : 0;
    const startRange = n.i > 0 ? n.i - 1 : line.length - 1;
    const endRange = n.i + n.v.length < line.length ? n.i + n.v.length: 0;
    return (s === endRow || s === startRow) || (s >= startRange && s<=endRange)
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
    const matrix = []
    lines.forEach((line, i) => {
        matrix.push(line.split(""))
    });
    console.log(matrix.map(m=>m.join("\t")).join("\n"))

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            const col = row[j];
            const adjacentChars = getAdjacentChars(matrix, i, j);
            console.log(adjacentChars)
        }
        
    }

}

const sum = ()=>{
    const lines = input.sample.split('\n');
    let res = 0
    lines.forEach((line, i) => {
       const numbers = getNumbers(line);
        const prevSymb = lines[i - 1] ? getSymbols(lines[i - 1]) : [];
        const currentSymb = getSymbols(lines[i]) ;
        const nextSymb = lines[i + 1] ? getSymbols(lines[i + 1]) : [];
        console.log(numbers, 
            prevSymb, 
            currentSymb, 
            nextSymb, 
            numbers.filter(n=>isValidRange(prevSymb, n, line) || isValidRange(currentSymb, n, line) || isValidRange(nextSymb, n,line)).map(v=>parseInt(v.v)))
        numbers.filter(n => isValidRange(prevSymb, n, lines[i - 1]) || isValidRange(currentSymb, n, line) || isValidRange(nextSymb, n, line)).map(v=>parseInt(v.v)).forEach(r=> res+=r)
    });
    console.log(res)
}
sum()

