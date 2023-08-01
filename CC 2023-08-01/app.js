// Challenge:

// Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.
// For example, solution(20) should return [5, 2, 1]


// Solution:

function solution(number){
  let a = 0;
  let b = 0;
  let c = 0;
 for(let i = 1; i < number; i++){
  i % 3 === 0 && i % 5 === 0 ?  c++ : i% 3 === 0 ?  a++ : i % 5 === 0 ?  b++ : i;
 
}
  return [a, b, c]
}

