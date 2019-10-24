"use strict";


/** 1. countWords */
function countWords(phrase) {
	// Replace this with your code
  let wordCounts = {};
  for (const word of phrase.split(' ')) {
    if (wordCounts.hasOwnProperty(word)) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts;
}

console.log(countWords("One two two three four four four five"))
// { One: 1, two: 2, three: 1, four: 3, five: 1 }


/** 2. getMelonsAtPrice */
function getMelonsAtPrice(price) {
	// Replace this with your code
   
}
