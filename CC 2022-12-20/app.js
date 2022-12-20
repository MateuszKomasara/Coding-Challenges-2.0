// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

reverse = function(array) {
    let arr = [];
    while (array.length) {
      arr.push(array.pop());
    }
  
    return arr;
    }