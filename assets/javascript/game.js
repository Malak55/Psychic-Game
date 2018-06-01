
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = [];
    var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //user guess
        var computerGuess =
    computerChoice[Math.floor(Math.random()*computerChoice.length)]; //comp selects random letter
        guessesSoFar.push(userGuess); //user guess to guesses
        if (userGuess == computerGuess) {
            wins++;
            alert("That's a bingo!");
            guessesLeft = 9; //reset guesses to 9
            guessesSoFar.length = 0; //removes array number
        }
        else if (guessesLeft == 0){
            losses++;
            alert("No dice!");
            guessesLeft = 9;
            guessesSoFar.length = 0;
        }
        else if (userGuess !== computerGuess){
            console.log(guessesLeft)
            guessesLeft--;
        }
        
        document.querySelector("#wins").innerHTML = wins;
        document.querySelector("#losses").innerHTML = losses;
        document.querySelector("#guessesLeft").innerHTML = guessesLeft;
        document.querySelector("#guessesSoFar").innerHTML = guessesSoFar;
        }
        