var wordSelected = require('./word.js');
var game = require('./game.js');

var wordPicked = wordSelected.wordSelected;

function dashWords (){ 
	var empty = "";
	    for (var i=0; i< wordPicked.length; i++){
	        empty += " _ "
	    }

	    console.log(empty);
}

dashWords();