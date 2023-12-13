const { forEach } = require('lodash');
const input = require('./input.js')
/**
 * 
 * @param {string} i 
 * @returns 
 */
const extractDirections = (i) => [...i.matchAll(/(?<from>\w{3})\s+=\s+\((?<left>\w{3}),\s+(?<right>\w{3})\)/g)][0].groups

const parse = (i) => {
    const [directionsString, connectionsString] = i.split("\n\n");
    const directions = directionsString.split("")
    const connections = connectionsString.split("\n").map(extractDirections).reduce((acc, dir) => {
        acc[dir.from] = { L: dir.left, R: dir.right }
        return acc
    }, {});
    return { directions, connections }
}

const findPath = (startingNode, connections, directions, condition) => {
    let steps = 0;
    while (!condition(startingNode)) {
        for (const dir of directions) {
            steps++;
            startingNode = connections[startingNode][dir]
        }
    }
    return steps;
}

const lcm = (numbers)=> {
    return numbers.reduce((acc, n) => (acc * n) / gcd(acc, n));
}

const gcd = (a,b) => {
    return b === 0 ? a : gcd(b, a % b);
}

const part1 = () => {
    const { directions, connections } = parse(input.in)
    let current = "AAA"
    const steps = findPath(current,connections,directions,(c=>c === "ZZZ"))
    console.log(steps)
}
const part2 = () => {
    const { directions, connections } = parse(input.in)
    const startingNodes = Object.keys(connections).filter(k => k.endsWith("A"))
    const steps = startingNodes.map(s => findPath(s, connections, directions, (c => c.endsWith("Z"))))
    console.log(lcm(steps))
}
part2()