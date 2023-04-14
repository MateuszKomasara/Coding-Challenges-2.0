// Having two standards for a keypad layout is inconvenient!
// Computer keypad's layout:
// 7 8 9  \n
// 4 5 6  \n
// 1 2 3  \n
//   0 \n

// Cell phone keypad's layout:
// 1 2 3\n 
// 4 5 6\n  
// 7 8 9\n  
//   0\n

// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

// Example:
// "789" -> "123"

// Notes:
// You get a string with numbers only


function computerToPhone(numbers){
    return numbers.split('').map(x =>
      x === '7' ? '1' :
      x === '8' ? '2' :
      x === '9' ? '3' :
      x === '4' ? '4' :
      x === '5' ? '5' :
      x === '6' ? '6' :
      x === '1' ? '7' :
      x === '2' ? '8' :
      x === '3' ? '9' :
      x === '0' ? '0' :
      x
    ).join('');
  }