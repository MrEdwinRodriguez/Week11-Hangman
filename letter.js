// importing from game.js
var phrase = require('./game.js').chosenWord.chosen;

var counter = 0;
var correctGuesses = [];

// constructor to put '_' or '-'
function DashedWord(word) {
	this.phrase = word;
	this.prints = function mark(){

    				for (i = 0; i < this.phrase.length; i++) {

        				if (this.phrase[i] == ' ') {
            				correctGuesses.splice(i, 1, "-")

        				} else {
        	 				correctGuesses.splice(i, 0, "_")
            
        						}
    						}
						}
					}  //end of constuctor

var dashes = new DashedWord(phrase)
dashes.prints();


// double space after join to substract commas but still leave space
var joinedArr = correctGuesses.join(' ');
console.log(joinedArr)

exports.placeHolders = {

	dashes : dashes.prints()
}	