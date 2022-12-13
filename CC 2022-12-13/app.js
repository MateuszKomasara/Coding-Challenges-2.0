// minimum age <= your age <= maximum age #Task

// Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

// This equation doesn't work when the age <= 14, so use this equation instead:

// min = age - 0.10 * age
// max = age + 0.10 * age
// You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]

// ##Examples:

// age = 27   =>   20-40
// age = 5    =>   4-5
// age = 17   =>   15-20

function datingRange(age){
    let min = Math.floor((age/2) + 7);
    let max = Math.floor((age-7)*2);
    let minMin = Math.floor(age -0.10 * age);
    let maxMin = Math.floor(age + 0.10 * age);
      return age <= 14 ? `${minMin}-${maxMin}`: `${min}-${max}`
    
  }
  