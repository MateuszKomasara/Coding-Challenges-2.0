// Complete the solution so that it returns the number of times the search_text is found within the full_text.

// Usage example:

// solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
// solution('aaabbbcccc', 'bbb') # should return 1
// Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

function solution(fullText, searchText){
    return fullText.split(searchText).length - 1;
  }