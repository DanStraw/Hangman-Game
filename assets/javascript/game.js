
window.onload = function() {
    //create a variable called words. Will be an array of names of bodies in the solar system
    var words = ["Sun", "Earth", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", 'Ganymede', 'Phobos',
        'Deimos', 'Ceres', 'Haumea', 'Makemake', 'Eris', 'Callisto', 'Europa', 'Hegemone', 'Io', 'Thebe', 'Atlas', 'Calypso', 'Hyperion', 'Janus',
        'Pandora', 'Phoebe', 'Titan', 'Ariel', 'Desdemona', 'Galatea', 'Triton', 'Hydra', 'Styx'];
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var wins = 0;
    var losses = 0;
    let guessesLeft = 8;
    var wordBlank = [];
    var wrongGuesses = [];
    var rightGuesses = [];
    var wordFill = [];
    //create variable computerChoice. This will randomly select one of the values from the characters var (Math.random)
    var computerChoice = words[Math.floor(Math.random() * words.length)];
    var computerChoiceLower = computerChoice.toLowerCase();
    var computerLetters = [];
    computerLetters = computerChoiceLower.split("");
    var blanks = computerLetters.length;
    var correctLetters = 0;
    //computerChoice will occur on page load and after each win or loss
    function newWord() {
        for (let i = 0; i < computerChoiceLower.length; i++) {
                wordFill.push('_'); 
                document.getElementById("word-blanks").innerHTML = wordFill.join(" ");
    //have word blank on game board populate with number of wordFill equal to the number of letters in the computerChoice word                   
        }       
    }
    newWord();
    
    function reset() {
        wordFill = [];
        computerChoice = words[Math.floor(Math.random() * words.length)];
        computerChoiceLower = computerChoice.toLowerCase();
        computerLetters = [];
        computerLetters = computerChoiceLower.split("");
        blanks = computerLetters.length;
	    correctLetters = 0;
	    guessesLeft = 8;
        wrongGuesses = [];
        rightGuesses = [];
        document.getElementById("guesses-left").innerHTML = guessesLeft; 
        document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ")
        newWord();    
    }

    //use onKeyUp to determine userChoice  
    document.onkeydown = function(event) {
        var userChoice = event.key;

        
        var userChoiceLower = userChoice.toLowerCase(); 
        // if user choice (in lower case) is in the array of of the letters in word to guess, and it is not in the array of already correctly guessed letters. then:
        if ((computerLetters.indexOf(userChoiceLower) > -1) && (rightGuesses.indexOf(userChoiceLower) === -1)) {
        
            for (let i = 0; i < computerChoice.length; i++) {
                
                if(computerLetters[i] === userChoiceLower) {
                    correctLetters++;
                    rightGuesses.push(userChoiceLower);
                    wordFill[i] = userChoiceLower;
                    document.getElementById('word-blanks').innerHTML = wordFill.join(" ");
                    //if there is a match between userChoice and computerChoice, have said letter replace the underscore in the word blank
                }    
            }   

        //compare userChoice to the letters in computerChoice. If there is no match, add 1 to incorrect guesses.
        // Do not count against if key hit is not a letter in the alphabet or has already been added to the wrong guess array.
        } else  if ((alphabet.indexOf(userChoiceLower) > -1) && (wrongGuesses.indexOf(userChoiceLower) < 0) && (rightGuesses.indexOf(userChoiceLower) === -1)) {
            guessesLeft--;
            wrongGuesses.push(userChoiceLower);  
            document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
            document.getElementById("guesses-left").innerHTML = guessesLeft;    
        }

        //if all correct letters are guessed before 8 incorrect guesses, user wins
        function win() {
            if (correctLetters === blanks) {
                wins++;
                document.getElementById('win-counter').innerHTML = wins;
                alert('Correct! The answer was ' + computerChoice + '!');
                
                function replay() {
                    var again = confirm('Do you want to play again?');
                    if (again = true) {
                        reset();
                    }
                } 
                replay();
            }    
        }
        
        //if guessesLeft = 0 before all correct letters are guessed, user loses.
        function loss() {
            if (guessesLeft <= 0) {
                losses++;
                document.getElementById('loss-counter').innerHTML = losses;
                alert('Oh no, you lost! The correct answer was ' + computerChoice);
                
                function replay() {
                    var again = confirm('Do you want to play again?');
                    if (again = true) {
                        reset();
                    }
                } 
                replay();
            }
        }
        win();
        loss();     
    }
}