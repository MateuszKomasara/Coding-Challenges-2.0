// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
    if (n <= 0) {
      return text;
    } else if(text === null){
      return null
    } else if(text === ''){
      return ''
    }else {
    for(let i =0; i<n; i++){
      let even = text.split('').filter((x,i,a) => i % 2 === 0 ).join('');
      let odd = text.split('').filter((x,i,a) => i % 2 !== 0 ).join('');
      text = odd + even
      }
    }
    return text
  }
  
  function decrypt(encryptedText, n) {
      if (n <= 0) {
      return encryptedText;
    } else if(encryptedText === null){
      return null
    } else if(encryptedText === ''){
      return ''
    } else {
      for (let i = 0; i < n; i++) {
        const mid = Math.floor(encryptedText.length / 2);
        const even = encryptedText.slice(mid);
        const odd = encryptedText.slice(0, mid);
        let decryptedText = '';
  
        for (let j = 0; j < even.length; j++) {
          decryptedText += even[j] + (odd[j] || '');
        }
  
        encryptedText = decryptedText;
      }
    }
    return encryptedText;
  }