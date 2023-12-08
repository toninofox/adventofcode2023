const input = require("./input")

const getNumbers = (str) => [...str.matchAll(/\d+/g)].map((n) => n[0]);


const part1 = () => {
    const lines =input.sample.split("\n");
    const res = 0;
    lines.forEach(line => {
        const [_,numbers] = line.split(":")
        const [winners,myNumbers] = numbers.split("|");
        const matches = getNumbers(myNumbers).filter(n=>getNumbers(winners).some(w=>w === n))
        console.log(line,matches)
    });

}
part1()