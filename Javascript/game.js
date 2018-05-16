

let wordBank = ['platypus','kiwi','blobfish','armadillo','narwhal','salamander','aardvark','axolotl','viperfish','condor'];
let remainingGuesses = 12;
let wins = 0;
var dashedAnswer = [] ;
let lettersGuessed = [];
const alphabet = 
    ['a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z'];


//Code below selects random number and 
//then selects a random word from wordBank array
var w = (Math.floor(Math.random()* 10))
function Word() {
    return wordBank[w]
};


//This code below prints the dashed answer to the console    
var spacesNeeded = (Word().length);
console.log(spacesNeeded)


//Code below creates the var selectedWord
var selectedWord = wordBank[w]
console.log(selectedWord)
//Code below will create an array of selectedWord
let selectedWordArr = selectedWord.split('')
console.log(selectedWordArr)

//The code below shows how NOT to write a 'while' statement
//the while statement only needs a 'condition'
//and does not require the same condition counter that is the 
//for statement
//while (j = 0 ; j < spacesNeeded ; j++) {
  //  dashedAnswer.push("-")
//}

while (dashedAnswer.length <= spacesNeeded-1)
{
    dashedAnswer.push("-");
    console.log(dashedAnswer)
}



//Code below was written to test the line above    
//console.log(selectedWordArr)
for (x = remainingGuesses ; x > 0 ; x--) {
var guess = prompt("Enter a letter")


//here I have to add a condition that checks
//that the 'guess' is part of the 'alphabet'

var lettersInWord = false 
    for (s = 0; s < alphabet.length; s++ ){
        if (guess === alphabet[s]) {
            for ( i = 0 ; i < selectedWord.length; i++){
                if (guess === selectedWord[i]) {
                    lettersInWord = true ;
                dashedAnswer.splice(i,1,guess)
                    console.log(dashedAnswer)
                    
                }
           /* else {
             //   for (t = 0 ; t< 1; t++)
                //the code below is printing wrong guesses
                //four times bc the counter is set to 
                //equal the number of letters in the word
                //how do I tell the comp to stop adding 
                //the wrong letter after inputting it once?
                //here i would need a for loop to tell it to loop once
                lettersGuessed.splice(0,0,guess)
                console.log(lettersGuessed)
                console.log(dashedAnswer) 
            } */
        
            }
            
        }
       

    }
 if (lettersInWord === false) {
    lettersGuessed.push(guess)
    remainingGuesses--
    console.log(lettersGuessed)
    console.log('remaining lives: '+ remainingGuesses)
 }

}

for (x = remainingGuesses ; x > 0 ; x--)
if (dashedAnswer[i] === alphabet[i]) {
    console.log('you win!')
}
if (remainingGuesses < 0 ) {
    console.log('you lose')
}

//here I will create conditions to win and lose!
//first if will say:
//if the dashedWord array DOES have all letters then...
//print msg - you win
//if remaining lives = 0 then...
//print msg - you lose
//if the dashedArray has any dashes
//print msg - you lose


