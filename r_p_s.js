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
    const player = player_selection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    // Handle bad input
    if (player !== "rock" && player !== "paper" && player !== "scissors") {
        return "Faulty input. Pick either rock, paper or scissors."
    }

    if ((player === "rock" && computer === "rock") ||
    (player === "paper" && computer === "paper") ||
    (player === "scissors" && computer === "scissors")) {
        return "It's a tie!";

    } else if ((player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")) {
        return "You won!";

    } else {
        return "You lost!";
    }
}

const player_selection = "RoCk";
const computerSelection = getComputerChoice();
console.log(playRound(player_selection, computerSelection));
