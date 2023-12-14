const input = require('./input');


const parseRow = (row) => row.split("")

const findGalaxies = matrix =>  matrix.reduce((acc, row, i) => {
        row.forEach((cell,j)=>{
            if(cell === "#") {
                acc.push([i,j])
            }
        })
        return acc
    }, [])

const evaluateEmptyRows = matrix => {
    const emptyRows = matrix.reduce((acc, row, index) => {
        if (row.every(cell => cell === ".")) {
            acc.push(index)
        }
        return acc
    }, [])
    return emptyRows
}

const evaluateEmptyColumns = matrix => {
    const emptyColumns = []
    for (let i = 0; i < matrix[0].length; i++) {
        if(matrix.map(r=>r[i]).every(cell => cell === ".")) {
                emptyColumns.push(i)
            }
    }
    return emptyColumns;
}

const getGalaxiesPair = galaxies => galaxies.flatMap(
    (v, i) => galaxies.slice(i + 1).map(w => [v,w])
);

const getDistances = (galaxies,emptyRows,emptyColumns,voidDistance) => {
    let res = 0
    const pairs = getGalaxiesPair(galaxies)
    for (let i = 0; i < pairs.length; i++) {
       const [[x1, y1], [x2, y2]] = pairs[i];
            res += (Math.abs(x1 - x2) + Math.abs(y1 - y2))
            for (const emptyRow of emptyRows) {
                if (Math.min(x1, x2) < emptyRow && emptyRow < Math.max(x1, x2)) {
                    res += voidDistance
                }
            }
            for (const emptyCol of emptyColumns) {
                if (Math.min(y1, y2) < emptyCol && emptyCol < Math.max(y1, y2)) {
                    res += voidDistance
                }
            }
    }
    return res;
}

const part1 = () => {
    const matrix = input.in.split("\n").map(parseRow)
    const emptyRows = evaluateEmptyRows(matrix);
    const emptyColumns = evaluateEmptyColumns(matrix);

    const galaxies = findGalaxies(matrix);
    const res = getDistances(galaxies,emptyRows,emptyColumns,1)
    console.log(res)

}
const part2 = () => {
    const matrix = input.in.split("\n").map(parseRow)
    const emptyRows = evaluateEmptyRows(matrix);
    const emptyColumns = evaluateEmptyColumns(matrix);

    const galaxies = findGalaxies(matrix);
    const res = getDistances(galaxies, emptyRows, emptyColumns, 999999) //1M - the existing one
    console.log(res)

}
part2()
