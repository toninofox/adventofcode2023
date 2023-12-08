const input = require('./input');
const regex = /Game (?'id'\d+):/g;

const findGame = (line) => {
    const match = regex.exec(line);
    if (match) {
        return match.groups.id;
    }
    return null;
}

const colours = ['blue', 'green', 'red'];

const parseLine = line => {
    const game = findGame(line);
        return {
            game,
            line: line.replace(regex, '')
        }
}

const doIt = () => {
    const games = input.split('\n')
    console.log(games);
}
