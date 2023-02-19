// Create a rock paper scissors game running in the console

// Plan:
// Create array of choices
// Randomly pick index
// return item at index from array

const choices = ["Rock","Paper","Scissors"];

function getComputerChoice() {
    // Math.random gives number between 0 and 1, not including 1
    // Multiplying that by the length of the array gives you any number
    // between 0 and length of array.
    // Flooring it gives you an integer between 0(inclusive)
    // and the length of the array (non inclusive)
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function playRound(player_selection, computerSelection) {
    if ((player_selection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") ||
    (player_selection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") ||
    (player_selection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors")) {
        return "It's a tie!";

    } else if ((player_selection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") ||
    (player_selection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") ||
    (player_selection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")) {
        return "You won!";

    } else {
        return "You lost!";
    }
}

const player_selection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(player_selection, computerSelection));
