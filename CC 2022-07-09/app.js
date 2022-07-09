// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(arr) {
    return arr.filter((item,index) => arr.indexOf(item) === index);
  
  }
  