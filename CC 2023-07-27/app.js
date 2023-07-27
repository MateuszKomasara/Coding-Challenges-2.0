// Challenge :

// Similar to those kinda names we need to initialize the names.
// See the pattern below:
// initials('code wars') => returns C.Wars 
// initials('Barack Hussain obama') => returns B.H.Obama 
// Complete the function initials.
// Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.



// Solution:

function initials(n){
  const names = n.split(' ');
  const initials = names.map(name => name.charAt(0).toUpperCase()).join('.');
  const lastName =  names.slice(-1)[0].slice(1);
  return `${initials}${lastName}`;
}

