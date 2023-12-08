const input = require('./input');

const resolve = () => {
    input.split("\n").forEach((line) => {
       const [first,last] = line.split("").filter(c=> /\d/.test(c))
    }
}