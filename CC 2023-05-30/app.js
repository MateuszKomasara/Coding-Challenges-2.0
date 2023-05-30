// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

const longestPalindrome = s => {
    let max = 0;
    let rev = [...s].reverse().join(``);
    for (let i = 0; i < s.length; i++) {
      for (let j = s.length; j > i; j--) {
        if (s.slice(i, j) === rev.slice(-j, (-i || rev.length)) && s.slice(i, j).length > max) max = s.slice(i, j).length;
      }
    }
    return max;
  };