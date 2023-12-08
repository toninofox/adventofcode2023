const input = require('./input');

const resolve = () => {
    let res = 0
    input.sample.split("\n").forEach((line) => {
       const digits = line.split("").filter(c=> /\d+/.test(c))
        res += parseInt(""+first+last)
    })
    console.log(res)
}

resolve()