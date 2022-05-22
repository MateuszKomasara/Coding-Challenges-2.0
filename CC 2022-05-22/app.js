// Create a function that takes in a number, if that number is even multiply it byÂ  8, if the number is odd multiply it by 9.

// My solution

function simpleMultiplication(number){
    
    if(number % 2 === 0 ){
     return number *8
    }
    else{
    return number * 9;
    }    
}


// Refactored arrow function
function simpleMultiplication(n){
  return n % 2 == 0 ? n * 8 : n * 9
}
or

const simpleMultiplication=n=>n*(n%2?9:8)
