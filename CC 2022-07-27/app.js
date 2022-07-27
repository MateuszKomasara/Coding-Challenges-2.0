// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x){
    let numbers = x.filter(el => typeof el === 'number').reduce((a,b) => a + b,0);
    let strings = x.filter(el => typeof el === 'string');
    let stringNums = strings.map(x => Number.parseInt(x)).reduce((a,b)=> a + b, 0);
    return numbers - stringNums;
  }
  