const input = require('./input')

const getNumbers = (str) => [...str.matchAll(/\d+/g)].map((n) => ({v:n[0],i:n.index}));
const getSymbols = (str) => [...str.matchAll(/[^0-9.]+/g)].map((n) => n.index);


const isValidRange = (symbols,n) => symbols.some(s => {
    const validRanges = [n.i - 1, n.i + n.v.length];
    return validRanges.some(r=> r === s);
})



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

