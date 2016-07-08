var letter = require('./letter');
// var words = myGame.words;
// var randomInt = Math.floor(Math.random() * ((words.length - 1) + 1));
// var word = words[randomInt];

//should be constructor

// export checkLetter() {
// 	var wordArr = word.split('');
// 	wordArr.forEach(function(letter) {
// 		if(letter == ) {

// 		}
// 	})
// }

var Word = function(wrd) {
	this.word = wrd;
	this.lets = [];
	this.found = false;
	this.getLets = function() {
		for(var i=0; i<this.word.length; i++) {
			this.lets.push(new letter.Letter(this.word[i]));
		}
		console.log(this.lets);
	}
}