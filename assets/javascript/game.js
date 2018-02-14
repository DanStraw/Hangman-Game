
window.onload = function() {
  
    //create a variable called characters. Will be an array of of character names. 
    var words = ["Luke Skywalker", "Han Solo", "Leia Organa", "Chewbacca", "C Three P O", "Darth Vader", "Emperor Palpatine", "Bobba Fett", "Lando Calrissian"];
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 8;
    var wordBlank = [];
    var wrongGuesses = [];
    var blanks = [];
    var underScores = [];
    var spaces = [];
    var computerChoice;
    //create variable computerChoice. This will randomly select one of the values from the characters var (Math.random)
    //computerChoice will occur on page load and when user hits enter after each game is completed
    function newWord() {
        computerChoice = words[Math.floor(Math.random() * words.length)];
        console.log(computerChoice);
        for (let i = 0; i < computerChoice.length; i++) {
            if (computerChoice[i] === " ") {
                underScores.push("   ");
                
                console.log("space");
            } else {
                underScores.push('_');
 
                
            }
        }
        document.getElementById("word-blanks").textContent = underScores.join(" ");
    }
    
    
    document.onkeyup = function(event) {
        

        var userChoice = event.key;
        var guessesLeft = 8;
        for (guessesLeft; guessesLeft > 0; guessesLeft--) {
            console.log(userChoice);
                
            if (computerChoice.indexOf(userChoice) === -1) {
                guessesLeft = guessesLeft--;
                
                //wrongGuesses.push(userChoice);
                document.getElementById("guesses-left").textContent = guessesLeft;
                console.log(guessesLeft);
            }
        }     
    }

       
    //have word blank on game board populate with number of underscores equal to the number of letters in the computerChoice word   
        
    
    
    
    newWord();

    

    
        

}




//use onKeyUp to determine userChoice

//compare userChoice to the letters in computerChoice. If there is no match, add 1 to incorrect guesses

//if there is a match between userChoice and computerChoice, have said letter replace the underscore in the word blank

//if incorrect guesses equals 8 before all correct letters are guessed, user loses.

//if all correct letters are guessed before 8 incorrect guesses, user wins. Display picture of character alongside name.