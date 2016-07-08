var inquirer = require('inquirer');
var guessedLettersArr = [];
var count = 0;

function getGuess() {
	if(count < 9) {
		inquirer.prompt([
			{
				type: "text",
				name: "guess",
				message: "Please enter a letter to guess"
			}
		]).then(function(answers) {
			console.log("You guessed " + answers.guess.toLowerCase());
			guessedLettersArr.push(answers.guess.toLowerCase());
			console.log("Guessed letters: " + guessedLettersArr);
			count++;
			getGuess(); 
		})
	}
}

getGuess();