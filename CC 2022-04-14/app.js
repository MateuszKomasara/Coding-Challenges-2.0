// Write a function that will check if two given characters are the same case.
// * If either of the characters is not a letter, returnÂ -1
// * If both characters are the same case, returnÂ 1
// * If both characters are letters, but not the same case, returnÂ 0
// Examples
// 'a'Â andÂ 'g'Â returnsÂ 1
// 'A'Â andÂ 'C'Â returnsÂ 1
// 'b'Â andÂ 'G'Â returnsÂ 0
// 'B'Â andÂ 'g'Â returnsÂ 0
// '0'Â andÂ '?'Â returnsÂ -1

function sameCase(a, b){
 if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
    return -1
  }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
      return 1
  }else{
    return 0
  }
}
