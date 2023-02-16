// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.


function isSameLanguage(list) {
    const firstlang = list[0].language
    return list.every(dev=> dev.language === firstlang)
  }

//   Refactored more concise solution

function isSameLanguage(list) {
    return list.every(e => e.language === list[0].language);
  }

