// importing word from games.js
var phrase = require('./game.js').chosenWord.chosen;

var counter = 0;
var miss = 0;
var allGuesses = [];
var correctGuesses = [];


check('i')


 function check(x) {
    counter = 0; 
    allGuesses.push(x);


            for (i = 0; i < phrase.length; i++) {
               
                if (phrase[i] == x) {


                    console.log(x);
                    correctGuesses.push(x);
                    console.log(correctGuesses)
                }
                else{
                    counter++
                    if (counter == phrase.length){
                        miss++;
                    console.log('miss')
                }
                }
            

    }
}

console.log(miss);
 console.log('all' + allGuesses)