// The goal of this Kata is to return the greatest distance of index positions between matching number values in an array or 0 if there are no matching values.

// Example: In an array with the values [0, 2, 1, 2, 4, 1] the greatest index distance is between the matching '1' values at index 2 and 5. Executing greatestDistance/greatest_distance/GreatestDistance with this array would return 3. (i.e. 5 - 2)

// Here are some extra examples:

// [0, 2, 1, 2, 4, 1]            => 3 (1's at indices 2 and 5)
// [9, 7, 1, 2, 3, 7, 0, -1, -2] => 4 (7's at indices 1 and 5)
// [0, 7, 0, 2, 3, 7, 0, -1, -2] => 6 (0's at indices 0 and 6)
// [1, 2, 3, 4]                  => 0 (no repeated elements)

const greatestDistance = function(data) {
    let pairs = data.filter((x,i,a)=> data.indexOf(x) !== data.lastIndexOf(x));
    let pairSort = pairs.map(x=> x)
    if (pairs.length < 1) {
      return 0;
    } else {
      let greatestDist = 0;
      
      for (let i = 0; i < pairs.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
          if (data[i] === data[j]) {
            let dist = j - i;
            if (dist > greatestDist) {
              greatestDist = dist;
            }
          }
        }
      }
      
      return greatestDist;
    }
  };