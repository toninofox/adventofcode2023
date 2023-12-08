const input = require('./input.js')
const _ = require('lodash')

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

const secondOrderingRule = (a,b) => {
    const aSet = a.cards.split('')
    const bSet = b.cards.split('')
    aSet.forEach((aCard, i) => {
        const bCard = bSet[i];
        if (aCard > bCard) {
            return 1;
        } else if (aCard < bCard) {
            return -1;
        }
    })
}

const play = ()=> {
    const hands =input.in.split("\n").map(r=>{
        const [cards,bet] = r.split(" "); 
    return {cards,bet}
});
    const grouped = _.groupBy(hands.map(h=>({...h,cards: h.cards.split(''), rank:getRank(h.cards.split(''))})),"rank");
    const final = Object.keys(grouped).forEach(g=>{
        grouped[g].sort(secondOrderingRule)
    })
    console.log(final);
}
play();