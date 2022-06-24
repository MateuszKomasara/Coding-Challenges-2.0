// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, forÂ [1, 2, 2]Â it should returnÂ 9Â becauseÂ 1^2 + 2^2 + 2^2 = 9.

// My Original incorrect Code:

function squareSum(numbers){
let square = {};
 square = Math.sqrt(numbers);
  return square.reduce((acc, c) => {
      return acc + c;
  })
}
