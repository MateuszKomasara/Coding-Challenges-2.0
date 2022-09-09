// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!

// Note
// 1 Dollar = 100 Cents

function fuelPrice(litres, pricePerLitre) {
    return litres >= 10? parseFloat((litres * (pricePerLitre - .25)).toFixed(2)) :litres >= 8?parseFloat((litres * (pricePerLitre - .20)).toFixed(2)) : litres >= 6? parseFloat((litres * (pricePerLitre - .15)).toFixed(2)) : litres >= 4? parseFloat((litres * (pricePerLitre - .10)).toFixed(2)) : litres >= 2 ? parseFloat((litres * (pricePerLitre - .05)).toFixed(2)): parseFloat((litres * pricePerLitre).toFixed(2));
  
  }
    
  