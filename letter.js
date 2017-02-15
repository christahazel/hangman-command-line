// Letter.js should control whether or not a letter appears as a "_" or as itself on-screen.

var wordSelected = require('./word.js');
var game = require('./game.js');

function Letter(letter){
	this.letter = letter;
	this.found = false;
	this.display = function(){
		// hangman starts off all false
		if (this.found) return this.letter;
		else return '_';
	}
}

module.exports = Letter;