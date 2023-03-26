// s similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

// Task
// Given a number N , calculate its primorial.!alt!alt
// Notes
// Only positive numbers will be passed (N > 0) .
// Input >> Output Examples:
// 1- numPrimorial (3) ==> return (30)
// Explanation:
// Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .

// Mathematically written as , P3# = 30 .
// 2- numPrimorial (5) ==> return (2310)
// Explanation:
// Since the passed number is (5) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 = 2310 .

// Mathematically written as , P5# = 2310 .

function numPrimorial(n) {
    let arr = [];
    let i = 2;
    while (arr.length < n) {
      let divisors = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
          divisors++;
        }
      }
      if (divisors === 2) {
        arr.push(i);
      }
      i++;
    }
    return arr.reduce((a, b) => a * b);
  }
