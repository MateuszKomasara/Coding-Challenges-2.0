// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

// For example, given the following input array:
// your function should return the following object (the order of properties does not matter):

// { vegetarian: 2, standard: 1, vegan: 1 }

function orderFood(list) {
    const count = list.reduce((acc, obj) => {
    const meal = obj.meal;
    acc[meal] = (acc[meal] || 0) + 1;
    return acc;
  }, {});
    return count
  }