// Multiply without *  8kyu

// You are to calculate how much it would cost to print your name on a billboard. It is usually 30 pounds per letter. But it can be another price given a differnet parameter. Calculate the cost without using the *  sign.

// Solution

function multiplyAd(name, price = 30){
let length = name.length;
return length / (1/price);
}
