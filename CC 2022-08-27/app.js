// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let x = str.toLowerCase().split('').filter(a => a === 'x').length;
    let o = str.toLowerCase().split('').filter(a => a === 'o').length;
      return x === o ? true : false; 
    }

    