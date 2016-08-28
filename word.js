 var phrase = 'hello world'
var counter = 0;
var miss = 0;
 // check('i')
 // check('h')
 check('i')
  check('h')
    check('e')
            check('i')


 function check(x) {
    counter = 0; 
            for (i = 0; i < phrase.length; i++) {

                if (phrase[i] == x) {


                    console.log(x);
                }
                else{
                    counter++
                    if (counter == phrase.length){
                    console.log('miss')
                }
                }
     

    }
}