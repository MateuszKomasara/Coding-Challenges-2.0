// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0

function SequenceSum() {}

SequenceSum.showSequence = function(a) {
  if (a < 0) return `${a}<0`;
  if (a === 0) return '0=0';
  
  let arr = Array.from({length: a+1}, (_,i)=> i)
  return `${arr.join('+')} = ${arr.reduce((x,y)=> x + y)}`
};