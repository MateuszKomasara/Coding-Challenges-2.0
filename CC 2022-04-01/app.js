// Your function takes two arguments:
// 1. current father's age (years)
// 2. current age of his son (years)
// Calculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
// My attempt:

function twiceAsOld(dadYearsOld, sonYearsOld) {
     if(Math.sqrt(dadYearsOld) === sonYearsOld) {
    return dadYearsOld;
    }
   
   }
   
   
//    Correct Funciton answer
   
   function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
   }
