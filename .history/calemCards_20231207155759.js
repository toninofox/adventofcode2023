

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
    if (sameOfAKindArr[0] === 4) {
        return 7
    } else if (sameOfAKindArr[0] === 3 && sameOfAKindArr[1] === 2) {
        return 6
    } else if (sameOfAKindArr[0] === 3) {
        return 3
    } else if (sameOfAKindArr[0] === 2 && sameOfAKindArr[1] === 2) {
        return 2
    } else if (sameOfAKindArr[0] === 2) {
        return 1
    } else {
        return 0
    }
}