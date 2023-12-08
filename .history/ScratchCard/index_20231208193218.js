const input = require("./input")

const getNumbers = (str) => [...str.matchAll(/\d+/g)].map((n) => n[0]);


const part1 = () => {
    const lines =input.sample.split("\n");
    const res = 0;
    lines.forEach(line => {
        const [_,numbers] = line.split(":")
        const [winnersS,myNumbersS] = numbers.split("|");
        const myNumbers = getNumbers(myNumbersS)
        const winners = getNumbers(winnersS)
        const matches = myNumbers.filter(n=>winners.some(w=>w === n))
        console.log(line,matches)
    });

}
part1()