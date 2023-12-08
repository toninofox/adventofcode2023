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
const total = {}
const processCard = (card, i, cards, res) =>{
    res++;
    if(total[i] === undefined){
        total[i] = 0
    }
    total[i]++;
    const matches = card.myNumbers.filter(n => card.winners.some(w => w === n))
    for (let j = i; j <= matches.length; j++) {
          processCard(cards[j],j,cards)
    }
}


const part2 = () => {
    const lines = input.in.split("\n");
    let res = 0;
    const cards =[]
    lines.forEach((line,i) => {
        const [_, numbers] = line.split(":")
        const [winnersS, myNumbersS] = numbers.split("|");
        cards.push({ winners: getNumbers(winnersS), myNumbers: getNumbers(myNumbersS)})
    });

    cards.forEach((card,i)=>{
        processCard(card,i,cards,res)
    })
       console.log(total)
    console.log(res)

}


part1()