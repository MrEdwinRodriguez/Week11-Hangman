// need to instal npm package through node
// call the npm package that it being used at the top 
var inquirer = require ('inquirer');



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

        }) 
    }

// exports.userGuesses = {

// 	dashes : guess
// }	


start();
ask();