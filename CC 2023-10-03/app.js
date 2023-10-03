// Challenge:

// Amicable numbers are two different numbers so related that the sum of the proper divisors of each is equal to the other number. (A proper divisor of a number is a positive factor of that number other than the number itself. For example, the proper divisors of 6 are 1, 2, and 3.)
// For example, the smallest pair of amicable numbers is (220, 284); for the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110, of which the sum is 284; and the proper divisors of 284 are 1, 2, 4, 71 and 142, of which the sum is 220.
// Derive function amicableNumbers(num1, num2) which returns true/True if pair num1 num2 are amicable, false/False if not.


// Solution:

function amicableNumbers(num1, num2) {
 let arr1 = [];
  let arr2 = [];
for(let i =1; i < num1; i++){
   num1 % i === 0 ? arr1.push(i) : null;
} 
  for(let j =1; j < num1; j++){
   num2 % j === 0 ? arr2.push(j) : null;
} 

  
  let sum1 = arr1.reduce((prev,cur)=> prev + cur,0) ;
  let sum2 = arr2.reduce((prev,cur)=> prev + cur,0) ;
return sum1 === num2 && sum2 === num1
}



