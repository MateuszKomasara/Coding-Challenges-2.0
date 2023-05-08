// You are given two positive integers a and b (a < b <= 20000). Complete the function which returns a list of all those numbers in the interval [a, b) whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.

//     Be careful about your timing!
    
//     Good luck :)
    
//     Check my other katas:

function notPrimes(a,b){
    let arr = []; 
    for (let i = a; i < b; i++){
      if (!/[014689]/.test(i)) {
        for (let j = 2; j <= Math.sqrt(i); j++){
          if (i % j === 0) { arr.push(i); break;}
        }
      }
    }
    return arr;
   }