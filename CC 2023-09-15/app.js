// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.

function solve(n) {
    let count = 0;
     if(n % 10 !== 0){
       return -1
     }
     while(n !==0){
       n >= 500? ( n -= 500, count += 1):
       n >= 200? (n -= 200, count += 1):
       n >= 100? ( n -= 100, count += 1):
       n >= 50?  ( n -= 50, count += 1):
       n >= 20?  (n -= 20, count += 1):
       n >= 10?  (n -= 10, count += 1) : null;
     }
     return count
     }
