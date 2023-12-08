const input = require('./input');

const resolve = () => {
    let res = 0
    input.split("\n").forEach((line) => {
       const [first,last] = line.split("").filter(c=> /\d/.test(c))
        res += parseInt(""+first+last)
    })
    console.log(res)
}