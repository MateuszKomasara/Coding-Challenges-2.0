// Challenge:

// Definition
// Extra perfect number is the number that first and last bits are set bits.

// Task
// Given a positive integer N , Return the extra perfect numbers in range from 1 to N .


// Solution:

function extraPerfect(n) {
  const arr = [];
  
  for (let i = 1; i <= n; i++) {
    const bin = i.toString(2);
    
    if (bin[bin.length - 1] === '1' && bin[0] === '1') {
      arr.push(i);
    }
  }
  
  return arr;
}
