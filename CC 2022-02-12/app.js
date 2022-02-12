// Challenge:

// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.


// Solution :

function mostFrequentItemCount(collection) {
 const counts = collection.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  const sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1]);
   return sortedCounts.length > 0? sortedCounts[0][1] : 0;
  
  }
