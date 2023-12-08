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
    while(match) {
        const cubesCloned = {...cubes}
        const {count, colour} = match.groups;
        cubesCloned[colour] -= count;
        if (cubesCloned[colour]<0){
            return 0;

            console.log(line, cubesCloned)
        }
        match = colourregex.exec(line);
    }
        return gameId
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