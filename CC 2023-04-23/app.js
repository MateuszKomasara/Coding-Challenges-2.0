// Challenge:

// Please write a function that sums a list, but ignores any duplicate items in the list.
// For instance, for the list [3, 4, 3, 6] , the function should return 10.


// Solution:


function sumNoDuplicates(arr) {
  const newArr = arr.filter((num,index,array)=> 
     arr.indexOf(num) === arr.lastIndexOf(num)
  )
  return newArr.reduce((a,b)=> a+ b,0)

}
