// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.
// Examples (input -> output)
// * "kata" -> false ('a' comes after 'k')
// * "ant" -> true (all characters are in alphabetical order)
// Good luck :)
// Check my other katas:


// Solution:

function alphabetic(s) {
  let charNums = s.split('').map(x =>(x.charCodeAt(x)) - 'a'.charCodeAt(x)+1);
  return charNums.every((x, i, arr) => (i === 0 ? true : x >= arr[i - 1]));
}

// Simpler more concise solution:

const alphabetic = s => s === s.split('').sort().join('');

