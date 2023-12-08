

const sameOfAKind = (cards) => 
    Object.values(cards.reduce((acc, card) => {
        if (acc[card.rank]) {
            acc[card.rank]++
        } else {
            acc[card.rank] = 1
        }
        return acc
    },{})).sort((a,b)=>b-a);


const ranks = {
    fiveOfaKind: (cards)=> cards.reduce()
}