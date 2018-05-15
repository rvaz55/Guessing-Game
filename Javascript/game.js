

let wordBank = ['platypus','kiwi','blobfish','armadillo','narwhal','salamander','aardvark','axolotl','viperfish','condor'];
let remainingGuesses = 5;
let wins = 0;
let lettersGuessed = ['dogs'];
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
//Code below was written to test the line above    
//console.log(selectedWordArr)
var guess = prompt("Enter a letter")

//here I have to add a condition that checks
//that the 'guess' is part of the 'alphabet'
for (s = 0; s <= remainingGuesses -1 ; s++ )
    if (guess === alphabet[s]) {
    console.log("this matches");
    } else if (guess.length !== 1); {
    alert("Enter a single letter");
    } /*else { guess === null) {
        prompt("Enter a letter");
    }


    

if (remainingGuesses >= 0){
    guess = prompt("Guess another letter")
 
   }
}




//other stuff to figure out problem
//The code below applies the map method
//to the 'arr' array to produce newArr

/*let arr = [1,2,3,4,5,6,'cat',84,'dog'];

let newlist = arr.map((val, i, arr) => {
    return {
      value: val,
      index: i,
      arrary: arr}
})
console.log(newlist)

var kvArray = [
    {key: 1, value: 10}, 
    {key: 2, value: 20}, 
    {key: 3, value: 30}];

var reformattedArray = kvArray.map(obj =>{ 
var rObj = {};
rObj[obj.key] = obj.value;
return rObj;

})

    //update the lettersGuessed and clear any dashes that were guessed correctly
//Code below states which sections need to be 
//updated while the player's lives remain 
//more than 0.
//This loop needs to continue updating the following 
//until the remainingGuesses reaches zero.
    //update remainingGuesses
    //update lettersGuessed
    //update wins



//Code below was written to ensure the js was 
//linked properly and to practice syntax; made into a note.
//if (remainingGuesses>0){
//    document.write(wordBank.length)
//}

//Code below is telling the interpreter to loop
//the 'grab a word from the wordBank' function until
// 'remainingGuess' reached zero

//if (remainingGuesses>0) {
  // return (retrieveWord);
  
//}
   // return 
//} else {
    //end game code here */
