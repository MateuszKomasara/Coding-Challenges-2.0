// // Scenario
// // You're saying good-bye your best friend , See you next happy year .

// // Happy Year is the year with only distinct digits , (e.g) 2018

// // Task
// // Given a year, Find The next happy year or The closest year You'll see your best friend

// Year Of Course always Positive .
// Have no fear , It is guaranteed that the answer exists .
// It's not necessary that the year passed to the function is Happy one .
// Input Year with in range (1000  ≤  y  ≤  9000)

// Input >> Output Examples:
// nextHappyYear (7712) ==> return (7801)

// Explanation:
// As the Next closest year with only distinct digits is 7801 .


function nextHappyYear(year){
    let newYear = year + 1
   let arr = newYear.toString().split('') 
   if(arr.join('') === Array.from(new Set(arr)).join('')) return newYear
   else return nextHappyYear(newYear)
 }
