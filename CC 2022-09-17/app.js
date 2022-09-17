// Return two highest values 8kyu

function twoHighest(arr) {
  let newArr = arr.sort((a,b)=> a-b).slice(-2).reverse();
  console.log(newArr);
}
