const input = require('./input');

const resolve = () => {
    let res = 0
    input.in.split("\n").forEach((line) => {
       const digits = line.split("").filter(c=> /\d+/.test(c))
        res += parseInt(""+digits[0]+digits[digits.length-1])
    })
    console.log(res)
}

resolve()