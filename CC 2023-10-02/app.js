// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

function initializeNames(name){
    name = name.split(' ');
       if(name.length > 2){
         let mid = name.slice(1,-1)
         mid = mid.map(x => x.slice(0,1)).join('. ');
         return `${name[0]} ${mid}. ${name[name.length-1]}`
       } else{
         return name.join(' ')
       }
    
  }