// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

const maxSequence = function(arr){
    let maxSum = 0;
    let currentSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      currentSum = Math.max(0, currentSum + arr[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
    }
  

    // Kandanes algorithim

//     The maxSequence function takes an array arr as input and returns the maximum sum of a contiguous subarray.

// The algorithm uses two variables: maxSum to track the maximum sum encountered so far, and currentSum to track the sum of the current subarray.

// The algorithm iterates over the array elements. For each element, it calculates the current sum by either adding the element to the current sum or starting a new subarray from the current element. If the current sum becomes negative, it means starting a new subarray from the current element would be less optimal, so it resets the current sum to zero.

// At each iteration, the algorithm compares the current sum with the maximum sum encountered so far and updates maxSum if necessary. After iterating over all elements, it returns the maximum sum.

// With this implementation, the maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) call would return 6, which represents the maximum sum of the subarray [4, -1, 2, 1].

// Note that the algorithm handles both cases where the list contains only positive numbers (returning the sum of the whole array) and where the list contains only negative numbers (returning 0). An empty list is also considered to have a maximum sum of 0.