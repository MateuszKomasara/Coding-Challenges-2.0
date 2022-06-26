// Given 2 strings,Â aÂ andÂ b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (Â zeroÂ length ).
// Hint for R users:
// The length of string is not always the same as the number of characters
// For example:Â (Input1, Input2) --> output
// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
  }
  