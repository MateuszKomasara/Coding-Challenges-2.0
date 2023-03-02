// Challenge:

// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// Examples
// explode("312")
// should return :
// "333122"


// Solution:

function explode(s) {
return s.split('').map(x => x === '0'? '': (x).repeat(x)).join('')
}


// Solution 2:

function explode(s) {
return s.split('').map(x => x.repeat(+x)).join('')
}
