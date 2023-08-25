// I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

// Monday --> 12

// Tuesday --> numbers greater than 95

// Wednesday --> 34

// Thursday --> 0

// Friday --> numbers divisible by 2

// Saturday --> 56

// Sunday --> 666 or -666

// Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)

const AmIAfraid = function(day, num){
  
    const fear = {
     Monday: n => n === 12,
     Tuesday: n => n > 95 ,
     Wednesday: n => n === 34,
     Thursday: n => n === 0,
     Friday: n => n % 2 === 0,
     Saturday: n => n === 56,
     Sunday: n => n === 666 || n === -666 
    };
      return fear[day](num)
   }