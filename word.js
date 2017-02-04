// Word.js should contain all of the methods which will check the letters guessed versus the random word selected.
var wordArray = ['guinness', 'fat tire', 'sam adams', 'founders', 'yuengling'];

var wordSelected = wordArray[Math.floor(Math.random() * wordArray.length)];

// console.log(wordSelected);

exports.wordSelected = wordSelected; 


