// Given that person A loves to cycle and needs to stay hydrated by consuming 0.5 litres of water per hour. How would you calculate the amount of water consumed if given the amount of hours.

// Also round down to the nearest value.

function litres(time) {
  return Math.floor(time * 0.5);
}

//Refactored solution
const litres = time => Math.floor(time * 0.5);