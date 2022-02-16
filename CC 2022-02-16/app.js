// Challenge:

// Create a function that takes a number as an argument and returns a grade based on that number.
// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"
// Examples:
// grader(0)   should be "F"
// grader(1.1) should be "F"
// grader(0.9) should be "A"
// grader(0.8) should be "B"
// grader(0.7) should be "C"
// grader(0.6) should be "D"


// Solution:

function grader(s) {
  return s > 1 || s < 0.6? 'F': 
  s >= 0.9? 'A' : 
s >= 0.8? 'B' : 
  s >= 0.7? 'C' : 
s >= 0.6? 'D' : 'F'
}
