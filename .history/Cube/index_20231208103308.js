const input = require('./input');


const findGame = (line) => {
    const match = /Game (?<id>\d+):/g.exec(line);
    if (match) {
        return match.groups.id;
    }
    return null;
}


const cubes = {'blue': 14, 'green':13, 'red':12};


const parseLine = line => {
    const gameId = parseInt(findGame(line));
    const colourregex = /(?<count>\d+) (?<colour>blue|red|green)/g
    let match = colourregex.exec(line);
    const cubesCloned = {...cubes}
    while(match) {
        const {count, colour} = match.groups;
        cubesCloned[colour] -= count;
        match = colourregex.exec(line);
    }
    if(Object.values(cubesCloned).every(c => c >= 0)) {
        return gameId
    } else {
        console.log(line, cubesCloned)
        return 0
    }
}

const doIt = () => {
    const games = input.in.split('\n')
    let sum = 0;
    for (const game of games) {
        sum += parseLine(game)
    }
    console.log(sum)
}
doIt();