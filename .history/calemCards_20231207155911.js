

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
    const sameOfAKindArr = sameOfAKind(cards);
    if (sameOfAKindArr[0] === 5) {
        return 7
    } else if(sameOfAKindArr[0] === 4) {
        return 6
    } else if (sameOfAKindArr[0] === 3 && sameOfAKindArr[1] === 2) {
        return 5
    } else if (sameOfAKindArr[0] === 3) {
        return 4
    } else if (sameOfAKindArr[0] === 2 && sameOfAKindArr[1] === 2) {
        return 3
    } else if (sameOfAKindArr[0] === 2) {
        return 2
    } else {
        return 1
    }
}