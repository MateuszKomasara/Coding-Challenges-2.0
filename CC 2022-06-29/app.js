// Create a function that redistributes all wealth equally among all citizens.
// Wealth is represented as an array/list where every index is the wealth of a single citizen.The function should mutate the input such that every index has the same amount of wealth.MUTATE the input array/list, don't return anything.
// See example:
// wealth = [5, 10, 6]  # This represents:
//                      # citizen 1 has wealth 5
//                      # citizen 2 has wealth 10
//                      # citizen 3 has wealth 6
                     
// redistribute_wealth(wealth) # mutates wealth list
// wealth => [7, 7, 7] # wealth has now been equally redistributed


function redistributeWealth(wealth) {
  let sum=wealth.reduce((a,b)=>a+b,0)/wealth.length
   for(var i = 0; i < wealth.length; i++) {
    wealth[i] = sum;
  }
}

const redistributeWealth = wealth => {
    wealth = wealth.fill((wealth.reduce((a,b) => a + b ,0)/ wealth.length)) ; 
}