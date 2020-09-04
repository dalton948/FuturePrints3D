const prompt = require("readline-sync");

const maxRange = 10;
const maxGuesses = 3;
let currentGuess = 1;

let randomNumber = Math.floor(Math.random() * maxRange + 1);
console.log("The random number is:", randomNumber);

let playerGuess = prompt.question(
  `Hi, I've chosen a random number between 1 and ${maxRange}. You have ${maxGuesses} tried to guess it.\n`
);

function handleGuess(userGuess) {
  for (let guesses = 0; guesses < maxGuesses; guesses++) {
    if (userGuess == randomNumber) {
      console.log("You win!");
      console.log(`You guessed correct in ${currentGuess} guesses.`);
      playAgain();
    } else if (guesses == maxGuesses - 1) {
      console.log("You Lose!");
      console.log(`The correct number was ${randomNumber}`);
      playAgain();
    } else if (userGuess > randomNumber) {
      console.log("Think lower...");
      currentGuess++;
      userGuess = prompt.question("Guess again...");
    } else {
      console.log("Think higher...");
      currentGuess++;
      userGuess = prompt.question("Guess again...");
    }
  }
}

const playAgain = () => {
  let playAgainPrompt = prompt.question("Do you want to play again? y || n");
  playAgainPrompt = playAgainPrompt.toLowerCase();
  if (playAgainPrompt === "y") {
    randomNumber = Math.floor(Math.random() * maxRange + 1);
    console.log("The random number is:", randomNumber);
    currentGuess = 0;
    guesses = 0;
    layerGuess = prompt.question(
      `Hi, I've chosen a random number between 1 and ${maxRange}. You have ${maxGuesses} tried to guess it.\n`
    );
    handleGuess(playerGuess);
  } else {
    console.log("Thanks for playing!\nGoodbye.");
  }
};
handleGuess(playerGuess);

