// Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

// Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.

// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'
// As an example, here is how a string looks before and after the characters are fixed:

// "PRoT1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// // implement fix function -> 
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."
// Please create a function that will fix a given string of this mistake before incalculable damage can be done!

"e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

const numToString = str => {
    return str.split('').map(x => x === '0'? 'O': x === '1'? 'I': x === '2'? 'Z' : x === '3'? 'E': x === '4'? 'h': x ==='5'? 'S': x === '6'? 'G': x === '7'? 'L': x === '8'? 'B': x === '9'? 'q': x === 'O'? '0': x === 'I'? '1': x === 'Z'? '2': x === 'E'? '3': x === 'h'? '4': x === 'S'? '5': x === 'G'? '6': x === 'L'? '7': x === 'B'? '8': x === 'q'? '9': x).join('');
}

