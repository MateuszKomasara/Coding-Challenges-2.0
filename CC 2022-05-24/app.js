// Create a function to check if a string is a paliindrome, make sure it's case insensitive.

const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');

