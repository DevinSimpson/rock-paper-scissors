console.log("Hello world");
/*Create a function that returns a random result of 'Rock', 'Paper' or 'Scissors' 
We need a random number generator to pick a number between 1 and 3
Then we assign 1 to 'Rock' 2 to 'Paper' and 3 to 'Scissors'
We need a variable to hold the result of this function
*/
let randomNumber;
let computerChoice;
let playerChoice = prompt("Choose 'Rock', 'Paper' or 'Scissors'", );
let winner;

function computerPlay() {
  randomNumber = Math.floor((Math.random() * 3) + 1);
  console.log(randomNumber);
}

function assignComputerChoice(randomNumber) {
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
    if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        winner = "Computer wins. Paper beats rock.";
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        winner = "You win. Rock beats scissors.";
    } else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
        winner = "Computer wins. Scissors beats paper.";
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        winner = "You win. Paper beats rock.";
    } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
        winner = "Computer wins. Rock beats scissors.";
    } else winner = "You tied.";
    console.log(winner);
}  
