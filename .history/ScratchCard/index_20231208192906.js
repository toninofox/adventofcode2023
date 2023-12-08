const input = require("./input")

const getNumbers = (str) => [...str.matchAll(/\d+/g)]


const part1 = () => {
    const lines =input.split("\n");
    const res = 0;
    lines.forEach(line => {
        const [_,numbers] = line.split(":")
        const [winners,myNumbers] = numbers.split("|");

    });

}