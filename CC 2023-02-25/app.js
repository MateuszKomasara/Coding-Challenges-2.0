// Challenge :

// write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:

// * The original order should be preserved.
// * If there are no GitHub admin developers in a given language then return an empty array [].


// Solution:

function findAdmin(list, lang) {
  return list.filter(x => x.language === lang && x.githubAdmin === 'yes')
}

