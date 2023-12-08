const input = require('./input.js')
const _ = require('lodash')

const cardValues = {'A': 14, 'K': 13, 'Q': 12, 'T': 10, '9': 9, '8': 8, '7': 7, '6': 6, '5': 5, '4': 4, '3': 3, '2':2, 'J':1}


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
    const jokers = countJoker(cards);
    const jmostOccorrung  = jokers + mostOccuring;
    const secondJmostOccorrung  = jokers + secondMostoccorring;
    if (jmostOccorrung === 5) {
        return 7
    } else if (jmostOccorrung === 4) {
        return 6
    } else if (jmostOccorrung === 3 && secondJmostOccorrung === 2) {
        return 5
    } else if (jmostOccorrung === 3) {
        return 4
    } else if (jmostOccorrung === 2 && secondJmostOccorrung === 2) {
        return 3
    } else if (jmostOccorrung === 2) {
        return 2
    } else {
        return 1
    }
}

const countJoker = cards => cards.filter(c=>c==='J').length;

const secondOrderingRule = (a,b) => {
    let res = 0;
    a.cards.every((aCard, i) => {
        const bCard = b.cards[i];
        if (cardValues[aCard] > cardValues[bCard]) {
            res = 1;
            return false
        } else if (cardValues[aCard] < cardValues[bCard]) {
            res = -1;
            return false
        }
        return true
    })
    return res
}

const play = ()=> {
    const hands =input.sample.split("\n").map(r=>{
        const [cards,bet] = r.split(" "); 
    return {cards,bet}
});
    const grouped = _.groupBy(hands.map(h=>({...h,cards: h.cards.split(''), rank:getRank(h.cards.split(''))})),"rank");
    console.log(grouped)
    const final = Object.keys(grouped).map(g=>
        grouped[g].sort(secondOrderingRule)
    );
    console.log(final.flat());
    console.log(final.flat().reduce((acc, h, i) => acc + h.bet * (i + 1), 0))
}
play();