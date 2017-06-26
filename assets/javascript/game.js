// created: June 24, 2017 20:52
// Author: Chris Jalallian
// Revisions:
// 6/26 08:00 Reworked 

var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessed = [];

var compAnswer = compChoice[Math.floor(Math.random() * compChoice.length)];
console.log(compAnswer);

document.onkeyup = function(event) {
	var userGuess = event.key;



	
		if (userGuess !== compAnswer) {
			guesses--;
			//adds userGuess inputs to guessed array
			guessed[guessed.length]=userGuess;
		}

		if (userGuess === compAnswer) {
			// var guesses = 9;
			wins++;
			guesses = 9;
			//resets guessed letter array
			guessed = [];
		}

		if (guesses === 0) {
			losses++;
			
			guessed = [];
			guesses = 9;
		}

		else if (guesses === 0) {
			losses++;
			// var guesses = 9;
		}


	
	//logging wins
	console.log("Letter to guess: " + compAnswer)
	console.log("Wins: " + wins);
	console.log("Losses: " + losses);
	console.log("Letters guessed: " + guessed);
	document.getElementById("userWins").innerHTML= ("Wins: " + wins);
	document.getElementById("userLosses").innerHTML= ("Losses: " + losses);
	document.getElementById("guessRemain").innerHTML= ("Guesses Left: " + guesses);
	document.getElementById("guessedLetters").innerHTML= ("Your guesses so far: " + guessed);
	
}
// (some) OLD TEST


//need to reset comp guess loop
//figure out how to log previous guesses (writehtml clientside?)
	//Loop this and change losses to occur after 9 guesses
	// for (var i = 0; i > 10; i++) {
	// for (var I = 1; I < 6; I++) {		
		// else if (userGuess !== compAnswer) {
		// 		// losses++;
		// 		guesses--;
		// 		guessed.push(guessedArray);
		// 		// if (guesses === 9) {
		// 		// 	losses++;
		// 		// 	// var guesses = 9
		// 		// }
		// }
	// }