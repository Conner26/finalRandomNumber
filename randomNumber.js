// Guess the Number Game
function guessTheNumberGame() {
    let playAgain = true;
    
    while (playAgain) {
        const targetNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
        let guess = 0;
        let attempts = 0;

        console.log("I have picked a number between 1 and 100. Try to guess it!");

        while (guess !== targetNumber) {
            // Prompt the user for a guess
            guess = parseInt(prompt("Enter your guess (between 1-100):"), 10);
            
            if (isNaN(guess) || guess < 1 || guess > 100) {
                alert("Invalid input. Please enter a number between 1 and 100.");
                continue;
            }

            attempts++;

            // Give feedback to the user
            if (guess > targetNumber) {
                alert("Too high! Try again.");
            } else if (guess < targetNumber) {
                alert("Too low! Try again.");
            } else {
                alert(`Correct! You guessed the number in ${attempts} attempts.`);
            }
        }

        // Ask if the user wants to play again
        playAgain = confirm("Do you want to play again?");
    }

    console.log("Thanks for playing the game!");
}

// Run the game
guessTheNumberGame();

