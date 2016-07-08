var prompt = require('prompt');
var Word = require('./word');
var Game = require('./game');

prompt.start();

game = {
	wordBank : Game.Game.wordBank,
	userGuessedLetters : [],
	wordsWon : 0,
	guessesRemaining : 10, //per word
	currentWrd : null, //the word object
	startGame : function (wrd){
		//make sure the user has 10 guesses

		this.resetGuessesRemaining();

		//get a random word from the array
		this.currentWrd = new Word.Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);

		this.currentWrd.getLets(); //populate currentWrd (made from Word constructor function) object with letters
		console.log("     _____                               __   _______ _                               ");
		console.log("    / ____|                             / _| |__   __| |                              ");
		console.log("   | |  __  __ _ _ __ ___   ___    ___ | |_     | |  | |__  _ __ ___  _ __   ___  ___ ");
		console.log("   | | |_ |/ _` | '_ ` _ \\ / _ \\  / _ \\|  _|    | |  | '_ \\| '__/ _ \\| '_ \\ / _ \\/ __|");
		console.log("   | |__| | (_| | | | | | |  __/ | (_) | |      | |  | | | | | | (_) | | | |  __/\\__ \\");
		console.log("    \\_____|\\__,_|_| |_| |_|\\___|  \\___/|_|      |_|  |_| |_|_|  \\___/|_| |_|\\___||___/");
		console.log("    _    _                                         ");
		console.log("   | |  | |                                        ");
		console.log("   | |__| | __ _ _ __   __ _ _ __ ___   __ _ _ __  ");
		console.log("   |  __  |/ _` | '_ \\ / _` | '_ ` _ \\ / _` | '_ \\ ");
		console.log("   | |  | | (_| | | | | (_| | | | | | | (_| | | | |");
		console.log("   |_|  |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|");
		console.log("                        __/ |                      ");
		console.log("                       |___/                       ");
		console.log("Welcome to Game of Thrones Hangman!\nAll words are names of characters from the show.");
    console.log(this.currentWrd.wordRender() + '\n');

		this.keepPromptingUser();


	}, 
	resetGuessesRemaining : function(){
		this.guessRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
		    //console.log(result.guessLetter);
		    // if(self.userGuessedLetters.indexOf(result.guessLetter) < 0) {
    		// 	self.userGuessedLetters.push(result.guessLetter);
		    // } else {
		    // 	console.log('Already guessed that letter');
		    // }
		    
		    console.log('The letter you guessed is: ' + result.guessLetter);

		    //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
		    var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);
//if the user guessed incorrectly minus the number of guesses they have left
		    if (findHowManyOfUserGuess == 0){
			    if(self.userGuessedLetters.indexOf(result.guessLetter) < 0) {
    				self.userGuessedLetters.push(result.guessLetter);
    				self.guessesRemaining--;
			    	console.log('You guessed wrong!');
			    } else {
			    	console.log('Already guessed that letter');
			    }
		    }else{
		    	if(self.userGuessedLetters.indexOf(result.guessLetter) < 0) {
    				self.userGuessedLetters.push(result.guessLetter);
			    	console.log('You guessed right!');
			    } else {
			    	console.log('Already guessed that letter');
			    }
		    	//check if you win only when you are right
	    		if(self.currentWrd.didWeFindTheWord()) {
			    	console.log('You Won!!!');
			    	return; //end game
			    }
		    }
		    
		    console.log('Guesses remaining: ', self.guessesRemaining);
		    console.log(self.currentWrd.wordRender() + '\n');
		    console.log('here are the letters you guessed already: ' + self.userGuessedLetters);

		    if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
		    	self.keepPromptingUser();
		    }
		    else if(self.guessesRemaining == 0){
		    	console.log('Game over bro it was', self.currentWrd.word);
		    	console.log('Get with the program man');
		    }else{
		    	console.log(self.currentWrd.wordRender() + '\n');
		    }
		});
	}


};

game.startGame();