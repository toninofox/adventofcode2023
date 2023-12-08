const input = require('./input.js')

const sameOfAKind = (cards) => 
    Object.values(cards.reduce((acc, card) => {
        if (acc[card]) {
            acc[card]++
        } else {
            acc[card] = 1
        }
        return acc
    },{})).sort((a,b)=>b-a);


const getRank = (cards) => {
    const [mostOccuring, secondMostoccorring] = sameOfAKind(cards);
    if (mostOccuring === 5) {
        return 7
    } else if(mostOccuring === 4) {
        return 6
    } else if (mostOccuring === 3 && secondMostoccorring === 2) {
        return 5
    } else if (mostOccuring === 3) {
        return 4
    } else if (mostOccuring === 2 && secondMostoccorring === 2) {
        return 3
    } else if (mostOccuring === 2) {
        return 2
    } else {
        return 1
    }
}

const play = ()=> {
    const hands =input.in.split("\n").map(r=>{
        const [cards,bet] = r.split(" "); 
    return {cards,bet}
});
    const final = hands.map(h=>({...h,rank:getRank(h.cards.split(''))})).sort((a,b)=>b.ranks-a.ranks);
    console.log(final);
}
play();