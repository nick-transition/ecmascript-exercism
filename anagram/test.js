import Anagram from './anagram.js';

let subject = new Anagram("diaper");
console.log(subject.matches([ "hello", "world", "zombies", "pants"]))
