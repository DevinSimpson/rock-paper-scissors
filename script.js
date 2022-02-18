console.log("Hello world");
/*Create a function that returns a random result of 'Rock', 'Paper' or 'Scissors' 
We need a random number generator to pick a number between 1 and 3
Then we assign 1 to 'Rock' 2 to 'Paper' and 3 to 'Scissors'
We need a variable to hold the result of this function
*/

function computerPlay() {
let randomNumber = Math.floor((Math.random() * 3) + 1);
console.log(randomNumber);
}