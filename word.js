// importing word from games.js
var phrase = require('./game.js').chosenWord.chosen;
var letter = require('./main.js').userGuesses.guessedLetter;
var askQuestion() = require('./main.js').userGuesses.askQuestion;

var counter = 0;
var miss = 0;
var allGuesses = [];
var correctGuesses = [];


console.log('letter from main:' + letter);
check(phrase);

 function check(x) {
    counter = 0; 
    allGuesses.push(x);


            for (i = 0; i < phrase.length; i++) {
               
                if (phrase[i] == x) {
                    console.log('hi');

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

function lives(){
    if (misses < 10 ){
        ask();
    }
    else {
        console.log('game over');
    }
}


console.log(miss);
 console.log('all' + allGuesses)