// Challenge:

// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.
// A few examples:
// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// * If the average length is not an integer, use Math.round().
// * The input array's length > 1

// Solution:

function averageLength(arr) { 
  let length = Math.round(arr.map(x => x.length).reduce((a,b)=> a + b,0)/arr.length)
    return arr.map(x => x.slice(-1)).map(x => x.repeat(length))
}
