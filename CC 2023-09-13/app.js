// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

function boredom(staff){
    let bored = {
          accounts: 1,
          finance: 2,
          canteen: 10,
          regulation: 3,
          trading: 6,
          change: 6,
          IS: 8,
          retail: 5,
          cleaning: 4,
          'pissing about': 25
    }
    
    let staffVals =  Object.values(staff)
    let total = staffVals.map(x => bored[x]).reduce((prev,cur)=> prev + cur, 0);
    return total >= 100? 'party time!!' : total > 80? 'i can handle this': 'kill me now'
   
  }