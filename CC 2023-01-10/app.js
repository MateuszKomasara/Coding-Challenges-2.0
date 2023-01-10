// Challenge :

// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:


// Solution :

function sumSquares(array) {
  return array.map(x => x * x).reduce((a,b)=> a + b,0)
}
