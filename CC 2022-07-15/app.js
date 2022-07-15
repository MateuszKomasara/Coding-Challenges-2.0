// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){
    if (letter == "a") {
      return "Position of alphabet: 1"
    }else if (letter == "b") {
      return "Position of alphabet: 2"
    }else if (letter == "c") {
      return "Position of alphabet: 3"
    }else if (letter == "d") {
      return "Position of alphabet: 4"
    }else if (letter == "e") {
      return "Position of alphabet: 5"
    }else if (letter == "f") {
      return "Position of alphabet: 6"
    }else if (letter == "g") {
      return "Position of alphabet: 7"
    }else if (letter == "h") {
      return "Position of alphabet: 8"
    }else if (letter == "i") {
      return "Position of alphabet: 9"
    }else if (letter == "j") {
      return "Position of alphabet: 10"
    }else if (letter == "k") {
      return "Position of alphabet: 11"
    }else if (letter == "l") {
      return "Position of alphabet: 12"
    }else if (letter == "m") {
      return "Position of alphabet: 13"
    }else if (letter == "n") {
      return "Position of alphabet: 14"
    }else if (letter == "o") {
      return "Position of alphabet: 15"
    }else if (letter == "p") {
      return "Position of alphabet: 16"
    }else if (letter == "q") {
      return "Position of alphabet: 17"
    }else if (letter == "r") {
      return "Position of alphabet: 18"
    }else if (letter == "s") {
      return "Position of alphabet: 19"
    }else if (letter == "t") {
      return "Position of alphabet: 20"
    }else if (letter == "u") {
      return "Position of alphabet: 21"
    }else if (letter == "v") {
      return "Position of alphabet: 22"
    }else if (letter == "w") {
      return "Position of alphabet: 23"
    }else if (letter == "x") {
      return "Position of alphabet: 24"
    }else if (letter == "y") {
      return "Position of alphabet: 25"
    }else{
      return "Position of alphabet: 26"
    }
  }


  function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
  }
  