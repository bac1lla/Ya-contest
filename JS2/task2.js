const input1 = [
    [0, 0],
    [1, 0],
    [0, 1],
    [0, 1],
    [1, 1],
    [1, 1],
    [0, 0],
    [1, 0]
]

const input2 = [
    [1, 0],
    [1, 1],
    [0, 1],
    [1, 0]
]

function validateData(log) {
    // let path = log.reduce((acc = [], value ) => {
    //     acc[0] += value[0];
    //     acc[1] += value[1];
    //     return acc
    // })
    // return path[0] % 2 === 0 && path[1] % 2 === 0

    let pathX = 0;
    let pathY = 0;

    for (let diff of log) {
        pathX += diff[0] || 0;
        pathY += diff[1] || 0
    }

    return pathX % 2 === 0 && pathY % 2 === 0
}

function pathFinder(log) {

    if (validateData(log) === false) {
        return null;
    }

    let diffY = 0;
    let diffX = 0
    for (let diff of log) {
        if ( diff[0] === 1 && diffX === 0) {
            diffX--;
            diff[0] *= -1;
        } else if (diff[0] === 1 && diffX === -1) {
            diffX++;
        }
        if (diff[1] === 1 && diffY === 0) {
            diffY--;
            diff[1] *= -1;
        } else if(diff[1] === 1 && diffY === -1) {
            diffY++
        }
    }

    return log
}


console.log(pathFinder(input1))
console.log(pathFinder(input2))