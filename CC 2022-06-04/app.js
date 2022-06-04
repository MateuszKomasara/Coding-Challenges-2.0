// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.
// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:
// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets
// Example:
// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1
// The return Will always be an integer so as the params.

const magNumber = (info) => {
  const info = [gun, street] ;
  let magzines = 0;
  switch(gun){
      case('PT92'):
      magzines = Math.ceil((street * 3) / 17);
      break;
      case('M4A1'):
      magzines = Math.ceil((street * 3) / 30);
      break;
      case('M16A2'):
      magzines = Math.ceil((street * 3) / 30);
      break;
      case('PSG1'):
      magzines = Math.ceil((street * 3) / 5);
      break;
  }
  return magzines;
}

