
var userGuess;
var wordChoices = ["russel", "baez", "heyward", "rizzo", "contreras", "bryant", "almora", "schwarber", "fowler", "hendricks", "arrieta", "zobrist", "fowler", "jackson", "lester", "montgomery", "edwards", "rondon", "strop", "montero", "grimm", "wood", "chapman", "lackey"];
var indexCurrentWord;
var currentWord = [];
var underscoreLength = [];





// generate a random guess by the computer using a function from the wordChoices array
function generateComputerGuess(){
    // function to generate random word from array
    currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    console.log(currentWord);
    // ALSO, get the index of the currentWord that was randomly selected and save it to a variable
    indexCurrentWord = wordChoices.indexOf(currentWord);
    // console.log the index of the word selected to make sure it worked
    // console.log(indexComputerWord);
    // get the length of the string so you can use the _'s
    underscoreLength = wordChoices[indexCurrentWord].length;
    // console.log to see the length
    // console.log(underscoreLength);
    // print the number of characters as "_" to the html 
    for(i = 0; i < underscoreLength; i++){
        // console.log([i]);
    // append the underscores underscoreLength amount times
       $("#currentWord").append("_")[i];
    }
}


// check the guess to the currentWord string
function checkGuess (userGuess) {
    for( i = 0; i < currentWord.length; i++){
        if (currentWord[i] === userGuess) {
            console.log("hit");
            guessPosition = currentWord.indexOf(userGuess);
            console.log(guessPosition);
            // underscoreLength.splice(guessPosition, userGuess);
        } 
    }
}


// call the function to begin the game and get a computer guess
generateComputerGuess();

// when the user hits a letter, a guess is registered and saved as "userGuess"
document.onkeyup = function (event) {
    userGuess = event.key;
    // logged the userGuess to make sure it is working
    console.log(userGuess);
    checkGuess(userGuess);

}



