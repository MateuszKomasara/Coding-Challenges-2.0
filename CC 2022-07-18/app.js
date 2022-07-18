// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

function minMax(arr){
    let newArr = [];
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    newArr.push(min);
    newArr.push(max);
    return newArr;
  }

  //Refactored more concise solution

  function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }
  