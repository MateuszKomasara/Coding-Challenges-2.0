// Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.

// If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.

// roundIt(3.45) should return 4
// If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method.

// roundIt(34.5) should return 34
// If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.

// roundIt(34.56) should return 35

function roundIt(n){
    let str = n.toString()
    let dot = str.indexOf('.')
    let left = str.slice(0,dot);
    let right = str.slice(dot+1);
    return left.length > right.length ? Math.floor(n): right.length > left.length? Math.ceil(n): Math.round(n)
  }

//   Refactrored more elegant solution

function roundIt(n) {
    var [a, b] = String(n).split('.').map(s => s.length);
    if (a < b) return Math.ceil(n);
    if (a > b) return Math.floor(n);
    return Math.round(n);
}