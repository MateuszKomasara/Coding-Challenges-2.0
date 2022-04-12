// Write a function calledÂ repeatStrÂ which repeats the given stringÂ stringÂ exactlyÂ nÂ times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// My function solution:

function repeatStr (n, s) {
     for(let i = 0; i <= n; i++){
    return`${i} * ${s}`;
}
}

// Correct Solution:

function repeatStr(n, str)
{
        return str.repeat(n);
}
