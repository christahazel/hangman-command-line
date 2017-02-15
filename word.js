// Word.js should contain all of the methods which will check the letters guessed versus the random word selected.

var Letter = require('./letter.js')

function Word(word){
	this.word = word;
	this.letters = [];
	this.init = function(){
		for (var i=0; i<this.word.length; i++){
			// console.log(this.word[i]);
			var lett = new Letter(this.word[i]);
			this.letters.push(lett);
		}
	},

	//display is a function that will put either the letter or a dash into a string
	this.display = function(){
		var str = "";
		for (var i=0; i<this.letters.length; i++){
			 str = str + this.letters[i].display();

		}
		return str;
}; 
	this.updateLetter = function(guess){
		//check all letters and see if the guess matches
		//if it does, i update that letter's found key to true 
		for (var i=0; i<this.letters.length; i++){
			if (this.letters[i].letter == guess) this.letters[i].found = true;
		}
	}

}

// var dog = new Word('dog');
// console.log(dog.letters);
// dog.init();
// console.log(dog.letters);

module.exports = Word;

