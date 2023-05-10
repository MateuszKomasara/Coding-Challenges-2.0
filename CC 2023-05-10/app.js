// Challenge: 6Kyu

// The goal of this kata is two-fold:
// 1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.
// 2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.
// For the sake of this kata, you can assume all input will be a positive integer.
// Use Cases
// Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.
// Examples
// Input:
// fibsFizzBuzz(5)
// Output:
// [ 1, 1, 2, 'Fizz', 'Buzz' ]



// Solution:

let fibsFizzBuzz = function(n) {
let sequence = [];

  let a = 1; 
  let b = 1; 
  for (let i = 1; i < n+1; i++) {
    sequence.push(a);

    let nextNumber = a + b;
    a = b;
    b = nextNumber;
  }

  return sequence.map(x => x % 5 ===0 && x % 3 === 0? 'FizzBuzz': x % 5===0? 'Buzz': 
                     x % 3 ===0? 'Fizz': x);
 }

