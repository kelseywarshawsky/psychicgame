        var wins = 0;
        var losses = 0;
        var remainingGuesses = 10;
        var letters = [];
        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "s", "t", "u", "v", "w", "x", "y", "z"];


        document.onkeyup = function(event) {

            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
            letters.push(userGuess);

            if (userGuess === computerGuess) {
                wins++;
                remainingGuesses = 10;
                letters.length = 0;
                alert("Woah! You ARE a psychic!");
            } else {
                remainingGuesses--;
            }

            if (remainingGuesses === 0) {
                remainingGuesses = 10;
                letters.length = 0;
                losses++;
                alert("You are DEFINITELY not a psychic!");
            }

                var html =
                "<h1>Are you psychic?</h1><br><h2>What letter am I thinking of?</h2> <hr>" +
                "<p>You chose: " + userGuess + "</p>" +
                "<p>but I was thinking of: " + computerGuess + "</p>" +
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Lives: " + remainingGuesses + "</p>" +
                "<p>Letters guessed: " + letters + "</p>";


            document.querySelector("#game").innerHTML = html;


        };
