// Challenge :


// Write a function that removes every lone 9 that is inbetween 7s.
// "79712312" --> "7712312"
// "79797"    --> "777"


// Solution:

function sevenAte9(str) {
  return str.split('').map((x,i,a) => x === "9" && a[i-1] === "7" && a[i+1] === "7"? x.replace(/9/g,'') : x ).join('');
}


