

let wordBank = ['platypus','kiwi','blobfish','armadillo','narwhal','salamander','aardvark','axolotl','viperfish','condor'];
let remainingGuesses = 12;
let wins = 0;
var dashedAnswer = [] ;
let lettersGuessed = ['lettersGuess:'];
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
    for (s = 0; s < alphabet.length; s++ ){
        if (guess === alphabet[s]) {
            for ( i = 0 ; i < selectedWord.length; i++){
                if (guess === selectedWord[i]) {
                dashedAnswer.splice(i,1,guess)

               
                break
                }
            else {
                for (t = 0 ; t< 1; t++)
                //the code below is printing wrong guesses
                //four times bc the counter is set to 
                //equal the number of letters in the word
                //how do I tell the comp to stop adding 
                //the wrong letter after inputting it once?
                //here i would need a for loop to tell it to loop once
                lettersGuessed.push(guess)
                console.log(lettersGuessed)
                console.log(dashedAnswer)
            }
        
            }
            console.log(guess + " is in index " + i + " of selected words.")
            break
        }
        else if (guess.length !== 1) {
            alert("Enter a single letter")
        
        }

    }
    
}



