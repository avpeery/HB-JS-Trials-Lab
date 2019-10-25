const wordsInCommon = (words1, words2) => {
  let words1Set = new Set(words1.split(" "));
  let words2Set = new Set(words2.split(" "));

  let resultSet = new Set();

  for (const word of words1Set) {
    if (words2Set.has(word)) {
      resultSet.add(word);
    }
  }
  return resultSet;
}

console.log(wordsInCommon('Hi Mom and Dad', 'Hi Mom and Brother'));
console.log(wordsInCommon('Hi Mom and Dad and Sis', 'Hi Mom and Brother and Sis'));
                          // Set { 'Hi', 'Mom', 'and', 'Sis' }

const kidsGame = (names) => {

  const output = [names.shift()];

  const firstLetterToWords = {};

  for (const name of names) {
    if (!firstLetterToWords[name[0]]) {
      firstLetterToWords[name[0]] = [name];
    } else {
      firstLetterToWords[name[0]].push(name)
    }
  }

  console.log(firstLetterToWords)

  while (true) {
    console.log(output);
    const lastWord = output[output.length-1];
    console.log(lastWord);
    console.log(lastWord[lastWord.length-1]);
    const startLetter = lastWord[lastWord.length-1];
    if (firstLetterToWords[startLetter].length === 0) {

    //if (!firstLetterToWords[startLetter]) {
      break;
    }
    const word = firstLetterToWords[startLetter].shift();
    console.log(word);
    output.push(word);
  }
  return output;
}
// console.log(kidsGame([]));
console.log(kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]));
console.log(kidsGame(["apple", "berry", "cherry"]));
console.log(kidsGame(["noon", "naan", "nun"]))
