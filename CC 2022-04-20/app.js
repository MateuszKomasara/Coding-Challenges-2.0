// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
// For example:
// gimme([2, 3, 1]) => 0

let gimme = function (inputArray) {
    if ((inputArray[0] < inputArray[1] && inputArray[0] > inputArray[2])
      || (inputArray[0] > inputArray[1] && inputArray[0] < inputArray[2]))
      return 0;
      
    if ((inputArray[1] < inputArray[0] && inputArray[1] > inputArray[2])
      || (inputArray[1] > inputArray[0] && inputArray[1] < inputArray[2]))
      return 1;
      
    if ((inputArray[2] < inputArray[0] && inputArray[2] > inputArray[1])
      || (inputArray[2] > inputArray[0] && inputArray[2] < inputArray[1]))
      return 2;
  };
  