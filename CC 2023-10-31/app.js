// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b) {
    let c = a.concat(b);
     return c.sort((a,b)=> a-b).filter((x,i,ar)=> ar.indexOf(x) === i)
   
  }
  

