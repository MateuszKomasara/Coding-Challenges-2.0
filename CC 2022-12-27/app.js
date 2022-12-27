// Challenge :

// Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.



// Solution :


function findLongest(arr) {
  let sorted = arr.sort((a, b) => {
    let numDigitsA = a.toString().length;
    let numDigitsB = b.toString().length;
    return numDigitsB - numDigitsA;
  });
  return sorted[0];
}
