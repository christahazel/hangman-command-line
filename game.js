// game.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.

var inquirer = require("inquirer");
var Word = require('./word.js');
var Letter = require('./letter.js');

var words = ['carton', 'kane', 'demented', 'stillwater', 'beachhaus'];

// var wordToPlay = words[0];
var wordToPlay = words[Math.floor(Math.random()*words.length)];

var wordObject = new Word(wordToPlay);
wordObject.init();

function askLetter(){ 
  inquirer.prompt([
    {
    type: "input",
    name: "guess",
    message: "what letter do you guess?"},
    ]).then(function(data){
      if (data.guess != 'no'){
          wordObject.updateLetter(data.guess);

          console.log(wordObject.display());

          askLetter();
      }

    });
  }

askLetter();   