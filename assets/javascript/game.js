// created: June 24, 2017 20:52
// Author: Chris Jalallian
// Revisions:
// 

var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;

var compAnswer = compChoice[Math.floor(Math.random() * compChoice.length)];
console.log(compAnswer);

document.onkeyup = function(event) {
	var userGuess = event.key;


	//Loop this and change losses to occur after 9 guesses
	for ()
		if (userGuess === compAnswer) {
			wins++;
		}
		else if (userGuess !== compAnswer) {
				losses++;
				guesses--;
		}
	//logging wins
	console.log(wins);
	document.getElementById("userWins").innerHTML= ("Wins: " + wins);
	document.getElementById("userLosses").innerHTML= ("Losses: " + losses);
	document.getElementById("guessRemain").innerHTML= ("Guesses Left: " + guesses);
	// document.getElementById("guessed").innerHTML= ("Your guesses so far: " +);
}

//need to reset comp guess loop
//figure out how to log previous guesses (writehtml clientside?)
