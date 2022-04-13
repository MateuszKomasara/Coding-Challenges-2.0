// Write a function that takes in two flowers, if one flower has an even amount of petals and the other odd return true,otherwise return false.

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}


function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 === 1
}
