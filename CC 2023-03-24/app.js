// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

// Given a number determine if it special number or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// The number passed will be positive (N > 0) .

// All single-digit numbers within the interval [1:5] are considered as special number.

// Input >> Output Examples
// specialNumber(2) ==> return "Special!!"
// Explanation:
// It's a single-digit number within the interval [1:5] .

// specialNumber(9) ==> return "NOT!!"
// Explanation:
// Although, it's a single-digit number but Outside the interval [1:5] .

// specialNumber(23) ==> return "Special!!"


function specialNumber(n){
    const allowedDigits = ['0', '1', '2', '3', '4', '5'];
    const digits = n.toString().split('');
    const isSpecial = digits.every(digit => allowedDigits.includes(digit));
    return isSpecial ? "Special!!" : "NOT!!";
  }

//   More concise method:

function specialNumber(n){
    return /[6-9]/.test(n)?"NOT!!":"Special!!"
  }
  