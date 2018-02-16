
window.onload = function() {
    var words = ["Sun", "Earth", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var wins = 0;
    var losses = 0;
    //create a variable called characters. Will be an array of of character names. 
    let guessesLeft = 8;
    var wordBlank = [];
    var wrongGuesses = [];
    var rightGuesses = [];
    var wordFill = [];
    var computerChoice = words[Math.floor(Math.random() * words.length)];
    var computerChoiceLower = computerChoice.toLowerCase();
    var computerLetters = [];
    computerLetters = computerChoiceLower.split("");
    var blanks = computerLetters.length;
    var correctLetters = 0;
    //create variable computerChoice. This will randomly select one of the values from the characters var (Math.random)
    //computerChoice will occur on page load and when user hits enter after each game is completed
    function newWord() {
       /* let guessesLeft = 8;
        var wordBlank = [];
        var wrongGuesses = [];
        var rightGuesses = [];
        var computerChoice = words[Math.floor(Math.random() * words.length)];
        console.log(computerChoiceLower);*/
        console.log("newword");
        console.log(computerChoice);
        for (let i = 0; i < computerChoiceLower.length; i++) {
                wordFill.push('_'); 
                document.getElementById("word-blanks").innerHTML = wordFill.join(" ");                
        }   
        
    }
    newWord();
    
    function reset() {

        wordFill = [];

        //Chooses word randombly from the wordBank
        computerChoice = words[Math.floor(Math.random() * words.length)];
        //Splits the choosen word into individual letters
        computerChoiceLower = computerChoice.toLowerCase();
        computerLetters = [];
        computerLetters = computerChoiceLower.split("");
        //Get the number of blanks
        blanks = computerLetters.length;
        console.log('reset');
	    correctLetters = 0;
	    guessesLeft = 8;
        wrongGuesses = [];
        rightGuesses = [];
        newWord();
      
        
    }
    //use onKeyUp to determine userChoice  
    document.onkeyup = function(event) {
        

        var userChoice = event.key;
        //compare userChoice to the letters in computerChoice. If there is no match, add 1 to incorrect guesses      
        var userChoiceLower = userChoice.toLowerCase();
        if ((computerChoiceLower.indexOf(userChoiceLower) > -1) && (rightGuesses.indexOf(userChoiceLower) === -1)) {
        
            for (let i = 0; i < computerChoice.length; i++) {
                
                if(computerLetters[i] === userChoice) {
                    correctLetters++;
                   // console.log(computerLetters);
                    console.log(correctLetters);
                   // console.og(computerLetters);
                    rightGuesses.push(userChoiceLower);
                    wordFill[i] = userChoiceLower;
                    document.getElementById('word-blanks').innerHTML = wordFill.join(" ");
                }    
            }   
        } else  if ((computerChoiceLower.indexOf(userChoiceLower) === -1) && (wrongGuesses.indexOf(userChoiceLower) === -1) && (alphabet.indexOf(userChoiceLower) > -1)) {
            guessesLeft--;
            wrongGuesses.push(userChoice);  
            
        }
        function winsLosses() {
            if (correctLetters === blanks) {
                //alert('you win!');
                wins++;
                document.getElementById('win-counter').innerHTML = wins;
                reset();
            }
        }
        winsLosses();

        document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
        document.getElementById("guesses-left").innerHTML = guessesLeft;
        
    }
}

       
    //have word blank on game board populate with number of wordFill equal to the number of letters in the computerChoice word   
        
    
    
    
    

    
    

    
        









//if there is a match between userChoice and computerChoice, have said letter replace the underscore in the word blank

//if guessesLeft = 0 before all correct letters are guessed, user loses.

//if all correct letters are guessed before 8 incorrect guesses, user wins