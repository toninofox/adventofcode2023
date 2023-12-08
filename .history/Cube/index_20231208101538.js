const input = require('./input');
const idregex = /Game (?<id>\d+):/g;

const colourregex = /(?<count>\d+) (?<colour>blue|red|green)/g;

const findGame = (line) => {
    const match = idregex.exec(line);
    if (match) {
        return match.groups.id;
    }
    return null;
}

const cubes = {'blue': 14, 'green':13, 'red':12};

const parseLine = line => {
    const gameId = findGame(line);
    const colours = colourregex.match(line).groups;
        return {
            gameId,
            colours 
        }
}

const doIt = () => {
    const games = input.sample.split('\n')
    console.log(parseLine(games));
}
doIt();