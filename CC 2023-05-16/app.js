// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

// So:

// Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

function mostLikely(prob1,prob2){
    let num1 = prob1.split(':').reduce((a,b)=> a/b);
    let num2 = prob2.split(':').reduce((a,b)=> a/b);
  return num1 > num2? true : false;
  
}