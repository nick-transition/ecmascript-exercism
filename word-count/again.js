'use strict'

class Words {

  count(string){
    const strArray = string.toLowerCase().trim().split(/\s+/);
    return strArray.reduce((result,word)=> {
      console.log(result);
      result[word]++ || (result[word]=1);
      return result;
    },{})
  }
}

let words = new Words();

console.log(words.count("a string of a string of some words that are words"));
