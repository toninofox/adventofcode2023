const input = require("./input")

const getNumbers = (str) => [...str.matchAll(/\d+/g)].map((n) => n[0]);


const part1 = () => {
    const lines =input.in.split("\n");
    let res = 0;
    lines.forEach(line => {
        const [_,numbers] = line.split(":")
        const [winnersS,myNumbersS] = numbers.split("|");
        const myNumbers = getNumbers(myNumbersS)
        const winners = getNumbers(winnersS)
        const matches = myNumbers.filter(n=>winners.some(w=>w === n))
        if(matches.length){
            console.log(matches, Math.pow(2, matches.length - 1))
            res += Math.pow(2,matches.length-1);
        }
    });

    console.log(res)

}
part1()