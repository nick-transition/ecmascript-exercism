// let targetWord, sortedWord;
//
// export default word => {
//   targetWord = word;
//   sortedWord = sortChars(targetWord);
//   return {
//     matches: (possibles, ...more) => {
//       //if array more is good; else handle strings by pushing to array
//       Array.isArray(possibles) ? more = possibles : [more.push(possibles)];
//       return matches(more);
//     }
//   }
// }
//
// const sortChars = str => [...str.toLowerCase()].sort().join('');
// const matches= possibles => possibles.filter(match);
// const match = possible => targetWord !== possible.toLowerCase()
//                           && (sortedWord === sortChars(possible));

export default (originalWord) => {

  originalWord = originalWord.toLowerCase();

  const sort = (word) => [...word].sort().join();
  const isAnagram = (word) =>
      word.toLowerCase() !== originalWord &&
      sort(word.toLowerCase()) === sort(originalWord);
  const matches = (...words) => [].concat(...words).filter(isAnagram);
  return Object.freeze({
    matches
  });
}
