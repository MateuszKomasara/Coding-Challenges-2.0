// Complete the function that accepts a string parameter, and reverses each word in the string.Â AllÂ spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    Â  return str.split("").reverse().join("").split(" ").reverse().join(" ");
    }
    