// write me a functionÂ stringyÂ that takes aÂ sizeÂ and returns aÂ stringÂ of alternatingÂ '1s'Â andÂ '0s'.
// the string should start with aÂ 1.
// a string withÂ sizeÂ 6 should return :'101010'.
// withÂ sizeÂ 4 should return :Â '1010'.
// withÂ sizeÂ 12 should return :Â '101010101010'.
// The size will always be positive and will only use whole numbers.

function stringy(size) {
  var str='';
  for( var i=1; i<=size; i++ )
    str+=i%2;
  return str;
}


const stringy = size => Array.from(Array(size), (v, i) => +!(i % 2)).join('');

