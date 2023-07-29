// Challenge :

// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.
// Example:
// solution(5) // should return "Value is 00005"


// Solution:

function solution(value) {
  value = value.toString();
  while (value.length !== 5) {
    value = value.split('');
    value.unshift('0');
    value = value.join('');
  }
  return `Value is ${value}`;
}
