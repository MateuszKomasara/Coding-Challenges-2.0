// Complete the function that takes two integers (a, b, whereÂ a < b) and return an array of all integers between the input parameters,Â includingÂ them.
// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  arr = []
  for(i = a;i <= b; i++){ 
      arr.push(i)
  }
  return arr
}
