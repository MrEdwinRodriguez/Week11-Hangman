// array with stored words/phrases
var phraseArr = ['hello world', 'programming', 'developer', 'knights', 'bootcamp'];

// random number to help choose random word from array
var index = Math.floor((Math.random() * phraseArr.length));
randomPhrase = phraseArr[index]
			 
// console.log(randomPhrase);
// to export to another js file
exports.chosenWord = {
  chosen: randomPhrase
};