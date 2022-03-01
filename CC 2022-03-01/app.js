// Challenge:

// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.



//Solution

const adjacentElementsProduct = array => Math.max(...array.map((x,i)=>x*array[i+1]).slice(0,-1));
