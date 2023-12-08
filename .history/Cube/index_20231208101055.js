const input = require('./input');
const regex = /Game (?'id'\d+):/g;

const findGame = (line) => {
    const match = regex.exec(line);
    if (match) {
        return match.groups.id;
    }
    return null;
}

const colours = {'blue': 14, 'green':13, 'red':12};

const parseLine = line => {
    const gameId = findGame(line);
        return {
            gameId,
            line: line.replace(regex, '')
        }
}

const doIt = () => {
    const games = input.split('\n')
    console.log(games);
}
