// Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:

// each noun containing less than 2 vowels has the article "das"
// each noun containing 2/3 vowels has the article "die"
// each noun containing more than 3 vowels has the article "der"
// Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!


function derDieDas(wort){
     let articles = wort.match(/a|e|i|o|u|ä|ö|ü/gi);
      if (articles == null || articles.length == 0) {
        return `das ${wort}`;
      }
    
      if (articles.length > 3) {
        return `der ${wort}`;
      } else if (articles.length > 1) {
        return `die ${wort}`;
      } else {
        return `das ${wort}`;
      }
    
    }