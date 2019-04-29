// --- Directions
// Check a string if the parenthesis in it has the right order
// It is a very common interview question, where can be solved with stac
// This function receive an array of [x,y] coordinates in the space, add the in the object of right format
// example: points = [
//  [4, 5],
//  [10, 1],
//  [0, 40]
// ]

// the outcome is supposed to be [{x:4, y:5}, {x:10, y:1}, {x:0, y:40}}

function convertPoint(points) {
    return points.map(([x, y])=>{
        return { x, y};
    })
}


module.exports = convertPoint;