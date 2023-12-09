const { findLast } = require('lodash');
const input = require('./input')

const getMappingTypes = line => /(?<from>.*)-to-(?<to>.*) map:/g.exec(line).groups;

const finalMapping = {}
const hierarchy = {}

const buildSection = (sections, ix, inputs) => {
    const lines = sections[ix].split('\n');
    const [firstLine, ...rest] = lines;
    const { from, to } = getMappingTypes(firstLine);
    const mappings = rest.map(r => r.trim());
    const mappedValues = new Set()
    const notMapped = new Set()
    const mappedInput = new Set()
    mappings.forEach(mapping => {
        const [toR, fromR, range] = mapping.split(" ");
        const inputsInRange = inputs.filter(i => parseInt(i) >= parseInt(fromR) && parseInt(i) <= parseInt(fromR) + parseInt(range))

        if (inputsInRange.length) {

            hierarchy[from] = to;
            if (!finalMapping[from]) {
                finalMapping[from] = {}
            }
            if (!finalMapping[from][to]) {
                finalMapping[from][to] = {}
            }
            inputsInRange.forEach(i => {
                const mappedValue = "" + (parseInt(toR) - parseInt(fromR) + parseInt(i))
                finalMapping[from][to][i] = mappedValue
                mappedValues.add(mappedValue)
                mappedInput.add(i)
            })

        }

    })
    inputs.forEach(i => {
        if (!mappedInput.has(i)) {
            notMapped.add(i)
        }
    })
    if (sections[ix + 1]) {
        buildSection(sections, ix + 1, [...mappedValues, ...notMapped])
    }
}



const findLastChildren = (seed, key) => {
    if (!hierarchy[key]) {
        return seed;
    }
    const mappedValue = finalMapping[key][hierarchy[key]]["" + seed]
    return findLastChildren(mappedValue ? mappedValue : seed, hierarchy[key])
}

const getPairs = (initialArray) => 
    initialArray.reduce(function (result, _, index, array) {
        if (index % 2 === 0)
            result.push(array.slice(index, index + 2));
        return result;
    }, []);


const part1 = () => {
    const [seeds, ...sections] = input.in.split('\n\n');
    const [_, seedsS] = seeds.split(":")
    const finalSeeds = seedsS.trim().split(" ")
    buildSection(sections,0, finalSeeds);
    const lowestLocation = finalSeeds.filter(s => s).reduce((acc, seed) => {
        const location = parseInt(findLastChildren(seed, "seed"))
        if (acc === 0 || location < acc) {
            acc = location;
        }
        return acc
    }, 0)
    console.log(lowestLocation, Object.keys(hierarchy).reduce((acc, k) => acc + Object.values(finalMapping[k]).length, 0))

}


part1()

