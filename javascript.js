//array
var foodTypes = ["sushi", "burger", "salad", "fries", "cookies", "cake"];
//random word that is chosen
var foodChoice = foodTypes[Math.floor(Math.random() * foodTypes.length)];
var blankToGuess = [];
var wrongLetter = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var wins = 0;
var losses = 0;
var guessesLeft = 10;

console.log(foodChoice);

for (var i = 0; i < foodChoice.length; i++) {
    blankToGuess.push("_");
}


console.log(blankToGuess);

document.getElementById("myLives").innerHTML = guessesLeft;
document.getElementById("blankToGuess").innerHTML = blankToGuess.join(" ");
document.getElementById("myWins").innerHTML = wins;
document.getElementById("myLosses").innerHTML = losses;
document.getElementById("wrongLetter").innerHTML = wrongLetter;

document.onkeyup = function (event) {

    var keyPress = event.key.toLowerCase();




    if (guessesLeft >= 1) {
        if (alphabet.indexOf(keyPress) != -1) {

            if (foodChoice.indexOf(keyPress) != -1) {
                console.log(keyPress);

                for (var j = 0; j < foodChoice.length; j++) {

                    if (foodChoice[j] === keyPress) {
                        blankToGuess[j] = foodChoice[j];

                        document.getElementById("blankToGuess").innerHTML = blankToGuess.join(" ");
                    }


                }

            } else if (wrongLetter.indexOf(keyPress) === -1) {
                wrongLetter.push(keyPress);
                guessesLeft = guessesLeft - 1;
            }

            if (blankToGuess.join("") === foodChoice) {
                alert("You Win!");
                wins = wins + 1;
                document.getElementById("myWins").innerHTML = wins;
                resetGame();
            }
        }
        else {
            losses = losses + 1
            document.getElementById("myLosses").innerHTML = losses;
            alert("You lose. Try again!");
            resetGame();
        }

        function resetGame() {
            wrongLetter = [];
            guessesLeft = 10;
            blankToGuess = [];
            foodChoice = foodTypes[Math.floor(Math.random() * foodTypes.length)];
            for (var i = 0; i < foodChoice.length; i++) {
                blankToGuess.push("_");
            }

            document.getElementById("myLives").innerHTML = guessesLeft;
            document.getElementById("blankToGuess").innerHTML = blankToGuess.join(" ");
            document.getElementById("myWins").innerHTML = wins;
            document.getElementById("myLosses").innerHTML = losses;
            document.getElementById("wrongLetter").innerHTML = wrongLetter;

        }

    }
}  