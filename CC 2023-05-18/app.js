// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


function highestRank(arr){
    let nums = arr.reduce((acc,x)=> {
      x in acc? acc[x]++ : acc[x] = 1;
        return acc
     
    },{})
    let maxCount = 0;
    let mostFrequentNumber;
  
    Object.keys(nums).forEach((key) => {
      const count = nums[key];
  
      if (count > maxCount || (count === maxCount && key > mostFrequentNumber)) {
        maxCount = count;
        mostFrequentNumber = key;
      }
    });
  
    return Number(mostFrequentNumber);
  }