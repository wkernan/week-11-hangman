var letter = require('./letter');

var Word = function(wrd) {
	this.word = wrd;
	this.lets = [];
	this.found = false;
	this.getLets = function() {
		for(var i=0; i<this.word.length; i++) {
			this.lets.push(new letter.Letter(this.word[i]));
		}
	};
	this.didWeFindTheWord = function() {
		var counter = 0;
		for(var i=0; i<this.lets.length; i++) {
			if(this.lets[i].appear) {
				counter++;
			}
		}
		if(counter == this.lets.length) {
			this.found = true;
		}
		return this.found;
	};
	this.checkIfLetterFound = function(guessLetter) {
		var whatToReturn = 0;
		//console.log("checkIfLetterFound: " + letter.Letter[1].character);
		for (var i=0; i<this.lets.length; i++) {
			if(this.lets[i].character == guessLetter) {
				this.lets[i].appear = true;
				whatToReturn++;
			}
		}
		return whatToReturn;
	};
	this.wordRender = function() {
		var str = "";
		for(var i=0; i<this.lets.length; i++) {
			str += this.lets[i].letterRender();
		}
		return str;
	}
}

exports.Word = Word;