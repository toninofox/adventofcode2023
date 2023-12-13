const input = require('./input');

const parseIn = (input) => {
    const [time, distance] = input.split('\n');
    const raw = {
        time: time.split(/\s+/).slice(1).map(Number),
        distance: distance.split(/\s+/).slice(1).map(Number)
    };
    return raw.time.map((t,ix)=>({time:parseInt(t), distance:parseInt(raw.distance[ix])}))
}

const part1 = () => {
    const inp = parseIn(input.in);
    const res = inp.reduce((acc,{time, distance})=>{
        acc *= Array(time).fill(0).filter((v,ix)=>( (time-(ix+1)) * (ix+1)>distance)).length;
        return acc
    },1)
    console.log(res )
}

const part2 = () => {
    const inp = parseIn(input.in)
    const time = parseInt(inp.map(i => i.time).join(""))
    const distance = parseInt(inp.map(i => i.distance).join(""))
    const beating = Array(time).fill(0).filter((v, ix) => ((time - (ix + 1)) * (ix + 1) > distance)).length;
    console.log(beating)
}

part2();