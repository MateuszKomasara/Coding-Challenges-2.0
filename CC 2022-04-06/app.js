// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

function isPalindrome(line) {
    if(typeof line === 'number'){
      return line.toString();
    }  
    if(line === line.split('').reverse().join('')) {
      return true;
    } else if(line !== line.split('').reverse().join('')) { 
      return false;
    }
  }

  function isPalindrome(line) {
    return (String(line) == String(line).split('').reverse().join('') )
    
  }