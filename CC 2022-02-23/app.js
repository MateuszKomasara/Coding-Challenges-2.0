// Challenge :

// Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.


// Solution:

function SafeInteger(n) {
  return n > Number.MIN_SAFE_INTEGER && n < Number.MAX_SAFE_INTEGER? true : false
}
