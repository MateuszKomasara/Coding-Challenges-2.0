// How would you solve this ou need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)
// const REGEXP = /./;

const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;


// Explanation of the regular expression:
// ^ asserts the start of the string.
// (?=.*[a-z]) is a positive lookahead that ensures the presence of at least one lowercase letter.
// (?=.*[A-Z]) is a positive lookahead that ensures the presence of at least one uppercase letter.
// (?=.*\d) is a positive lookahead that ensures the presence of at least one digit.
// [a-zA-Z\d]{6,} matches any alphanumeric character (both lowercase and uppercase letters, as well as digits) and ensures a minimum length of 6 characters.
// $ asserts the end of the string.
// So, when using this regular expression to validate a password, it will only pass if it meets all the given criteria: at least six characters long, contains a lowercase letter, contains an uppercase letter, contains a digit, and only contains alphanumeric characters