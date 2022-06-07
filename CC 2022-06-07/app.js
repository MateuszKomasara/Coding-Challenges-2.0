// t's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array roundedÂ downÂ to its nearest integer.
// The array will never be empty.


// You got this correct but here is a way to create a cleaner refactored solution.

function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

// My solution:

function getAverage(marks){
let total = marks.reduce((sum, x) => sum + x ,0);
  return Math.floor(total / marks.length);
}
