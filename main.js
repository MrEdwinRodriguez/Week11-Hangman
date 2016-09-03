// need to instal npm package through node
// call the npm package that it being used at the top 
var inquirer = require ('inquirer');
var prompt = require ('prompt');


// starts game via letter.js
function start(){

		var phrase = require('./letter.js').placeHolders.dashes;
}

// using the inquirere npm to ask user for letter guess
var ask = function(){
        inquirer.prompt([{
            name: "guess",
            message: "Guess a letter"
        }]).then(function(response){

        	var guess = response.guess;
        	console.log('user guess is:' + ' ' + guess);

 // exports users guess
        exports.userGuesses = {

					guessedLetter : guess,
					askQuestion: ask()
			}	



        }) 
    }



start();
ask();