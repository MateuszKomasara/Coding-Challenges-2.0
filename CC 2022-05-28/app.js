// Given a non-negative integer,Â 3Â for example, return a string with a murmur:Â "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

let countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
 return str;
}

