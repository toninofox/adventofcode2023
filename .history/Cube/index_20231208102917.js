const input = require('./input');
const idregex = /Game (?<id>\d+):/g;

const colourregex = /(?<count>\d+) (?<colour>blue|red|green)/g;

const findGame = (line) => {
        return idregex.exec(line).groups.id;
}


const cubes = {'blue': 14, 'green':13, 'red':12};


const parseLine = line => {
    const gameId = parseInt(findGame(line));
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
        return 0
    }
}

const doIt = () => {
    const games = input.sample.split('\n')
    let sum = 0;
    for (const game of games) {
        sum += parseLine(game)
    }
    console.log(sum)
}
doIt();