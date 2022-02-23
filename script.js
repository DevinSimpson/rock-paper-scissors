console.log("Hello world");
/*Create a function that returns a random result of 'Rock', 'Paper' or 'Scissors' 
We need a random number generator to pick a number between 1 and 3
Then we assign 1 to 'Rock' 2 to 'Paper' and 3 to 'Scissors'
We need a variable to hold the result of this function
*/
let randomNumber;
let computerChoice;
let playerChoice = prompt("Choose 'Rock', 'Paper' or 'Scissors'", );
let computerScore;
let playerScore;
let winner;

function game() {
    for (let i =0; i < 5; i++) {
        playRound()
    }
}

function playRound() {
    computerPlay()
    assignComputerChoice()
    decideWinner()
}

function computerPlay() {
  randomNumber = Math.floor((Math.random() * 3) + 1);
  console.log(randomNumber);
}

function assignComputerChoice() {
  if (randomNumber === 1) {
      computerChoice = 'Rock';
  } else if (randomNumber === 2) {
      computerChoice = 'Paper';
  } else {
      computerChoice = 'Scissors';
  }
  console.log(computerChoice);
}

/* We are gonna make a function that takes a player choice and compares it with
the computer choice to determine who wins the game*/

function decideWinner() {
    if (playerChoice === computerChoice) {
        winner = "You tied.";
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Paper') ||
        (playerChoice === 'Paper' && computerChoice === 'Scissors') ||
        (playerChoice === 'Scissors' && computerChoice === 'Rock') 
       ){
        winner = `Computer wins. ${computerChoice} beats ${playerChoice}.`;
    } else {
        winner = `You win. ${playerChoice} beats ${computerChoice}.`;
    }
    console.log(winner);
}  
