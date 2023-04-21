// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

function spacey(array){
    return array.reduce((acc, curr) => {
      if (acc.length === 0) {
        return [curr];
      } else {
        const last = acc[acc.length - 1];
        acc.push(last + curr);
        return acc;
      }
    }, []);
      
    }

// More concise solution

    function spacey(array){
        let string = ''
        return array.map( (e) => string += e )
    }