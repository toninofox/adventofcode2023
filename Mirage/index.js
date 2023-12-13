const input = require('./input.js')
const {chunk} = require('lodash')
const parse = (row) => [...row.matchAll(/\-?\d+/g)].map(x=>Number(x[0]))

const calculateDifferences = (chunks) => {
    const result = []
    let prevValue
    for (const [a, b] of chunks) {
        if (prevValue !== undefined) {
            result.push(a - prevValue)
        }
        if(b!==undefined){
            prevValue = b
            result.push(b - a)
        }
    }
    return result
}

const calculateMagicNumber = result => result.reverse().map(x => x[x.length - 1]).filter(a => a !== undefined).reduce((acc,curr)=>{
        acc = curr+acc;
        return acc;
    },0)
    

const calculateMagicInitialNumber = result => result.reverse().map(x => x[0]).filter(a => a!==undefined).reduce((acc, curr) => {
    acc = curr - acc;
    return acc;
}, 0)

const evaluatRow = (r, magicNumberFunction)=> {
    let result = r;
    const allResults = [r]
    while(result.some(x=>x!==0)){
        result = calculateDifferences(chunk(result, 2))
        allResults.push(result)
    }
    
    return magicNumberFunction(allResults)
}

const part1 = () => {
    const rows = input.in.split("\n").map(parse)
    const evaluated = rows.reduce((acc,r)=>{
        acc += evaluatRow(r, calculateMagicNumber)
        return acc;
    }
    ,0)
    console.log(evaluated)
}

const part2 = () => {
    const rows = input.in.split("\n").map(parse)
    const evaluated = rows.reduce((acc, r) => {
        acc += evaluatRow(r, calculateMagicInitialNumber)
        return acc;
    }
        , 0)
    console.log(evaluated)
}


part2()