// Given the a list ofÂ numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// Example
// Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8


function pipeFix(numbers){
  var min = numbers[0];
  var max = numbers[numbers.length - 1];
  var array = [];
  
  for(var i = min; i<=max; i++)
  {
    array.push(i);
  }
  
  return array;
}
