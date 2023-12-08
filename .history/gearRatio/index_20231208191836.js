const input = require('./input')

const getNumbers = (str) => [...str.matchAll(/\d+/g)].map((n) => ({ v: n[0], i: n.index }));
const getSymbols = (str) => [...str.matchAll(/[^0-9.]+/g)].map((n) => n.index);
const getGears = (str) => [...str.matchAll(/\*/g)].map((n) => ({ v: n[0], i: n.index }));

const isValidRange = (symbols, n, line) => symbols.some(s => {
    const endRow = n.i > 0 ? -1 : line.length - 1;
    const startRow = n.i + n.v.length < line.length ? -1 : 0;
    const startRange = n.i - 1
    const endRange = n.i + n.v.length;
    return (s === endRow || s === startRow) || (s >= startRange && s <= endRange)

})

const getValidGearRange = (numbers, g, line) => numbers.filter(n => {
    const endRow = g.i > 0 ? -1 : line.length - 1;
    const startRow = g.i < line.length ? -1 : 0;
    const startRange = g.i - n.v.length
    const endRange = g.i + 1;
    return (n.i === endRow || n.i === startRow) || (n.i >= startRange && n.i <= endRange)
})

const part1 = () => {
    const lines = input.in.split('\n');
    let res = 0
    lines.forEach((line, i) => {
        const numbers = getNumbers(line);
        const prevSymb = lines[i - 1] ? getSymbols(lines[i - 1]) : [];
        const currentSymb = getSymbols(lines[i]);
        const nextSymb = lines[i + 1] ? getSymbols(lines[i + 1]) : [];
        console.log(numbers,
            prevSymb,
            currentSymb,
            nextSymb,
            numbers.filter(n => isValidRange(prevSymb, n, line) || isValidRange(currentSymb, n, line) || isValidRange(nextSymb, n, line)).map(v => parseInt(v.v)))
        numbers.filter(n => isValidRange(prevSymb, n, lines[i - 1]) || isValidRange(currentSymb, n, line) || isValidRange(nextSymb, n, line)).map(v => parseInt(v.v)).forEach(r => res += r)
    });
    console.log(res)
}
const part2 = () => {
    const lines = input.in.split('\n');
    let res = 0
    lines.forEach((line, i) => {
        const gears = getGears(line);
        const prevNumbers = lines[i - 1] ? getNumbers(lines[i - 1]) : [];
        const currentNumbers = getNumbers(lines[i]);
        const nextNumbers = lines[i + 1] ? getNumbers(lines[i + 1]) : [];
        gears.forEach(g =>{
           {
            const validGears = [...getValidGearRange(prevNumbers, g, line),
                ...getValidGearRange(currentNumbers, g, line),
                ...getValidGearRange(nextNumbers, g, line)
            ]
            if(validGears.length === 2){
                console.log(g,validGears)
                res += parseInt(validGears[0].v) * parseInt(validGears[1].v)
            }
           }
        })
               
    })
    console.log(res)
}
part2()

