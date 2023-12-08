const input = require('./input')

const sameOfAKind = (cards) => 
    Object.values(cards.reduce((acc, card) => {
        if (acc[card.rank]) {
            acc[card.rank]++
        } else {
            acc[card.rank] = 1
        }
        return acc
    },{})).sort((a,b)=>b-a);


const getRank = (cards) => {
    const [mostOccuring, secondMostoccorring] = sameOfAKindArr;
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
    const hands =input.split("\n").map(r=>{
        const [cards,bet] = r.split(" "); 
    return {cards,bet}});
    const final = hands.forEach(h=>({...h,rank:getRanks(h.cards)})).sort((a,b)=>b.ranks-a.ranks);
    console.log(final);
}
play()