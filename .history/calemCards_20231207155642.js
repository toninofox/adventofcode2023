

const sameOfAKind = (cards, num) => {
    Object.values(cards.reduce((acc, card) => {
        if (acc[card.rank]) {
            acc[card.rank]++
        } else {
            acc[card.rank] = 1
        }
        return acc
    },{})).sort((a,b)=>b-a)[0];
}

const ranks = {
    fiveOfaKind: (cards)=> cards.reduce()
}