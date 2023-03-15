// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)


function minValue(values){
    return Number(values.sort((a,b)=> a-b).filter((x,i,arr)=> x != arr[i+1]).join(''))
    }

    // Version using Set

    function minValue(values){
        return Number(Array.from(new Set(values)).sort().join(''))
      }