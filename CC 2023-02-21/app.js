// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.
// For example, given the following input array:


function isAgeDiverse(list) {
    let ages = list.map(dev => dev.age);
    return (
      ages.filter(age => age >= 10 && age < 20).length > 0 &&
      ages.filter(age => age >= 20 && age < 30).length > 0 &&
      ages.filter(age => age >= 30 && age < 40).length > 0 &&
      ages.filter(age => age >= 40 && age < 50).length > 0 &&
      ages.filter(age => age >= 50 && age < 60).length > 0 &&
      ages.filter(age => age >= 60 && age < 70).length > 0 &&
      ages.filter(age => age >= 70 && age < 80).length > 0 &&
      ages.filter(age => age >= 80 && age < 90).length > 0 &&
      ages.filter(age => age >= 90 && age < 100).length > 0 &&
      ages.filter(age => age >= 100).length > 0
    );
  
  }

