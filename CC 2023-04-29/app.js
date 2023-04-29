// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

// Examples:

// secondSymbol('Hello world!!!','l')  --> 3
// secondSymbol('Hello world!!!', 'A') --> -1
// Good luck ;) And don't forget to rate this Kata if you liked it.


function secondSymbol(s, symbol) {
    let multi = s.split('').filter(x => x === symbol).length;
     let first = s.indexOf(symbol);
     let second = s.indexOf(symbol, first + 1);
     return multi > 1? second : -1
   }

   // This is preferable and much more efficient as failure to retreive index will result in a -1, so there is not a need to preface it with a conditional.
   
function secondSymbol(s, symbol) {
    return s.indexOf(symbol, s.indexOf(symbol) + 1);
  }
  