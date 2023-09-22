// Challenge:


// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.
// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.
// Good luck!


// Solution:

function solve(s){
let nums = s.replace(/[a-zA-Z]/g, ' ')
 let numArray = nums.split(' ').filter(Boolean);
  return Math.max(...numArray.map(Number));
}

// More Concise Solution:

function solve(s){
  return Math.max(...s.match(/\d+/g));
};

