// Create a rock paper scissors game running in the console

// Plan:
// Create array of choices
// Randomly pick index
// return item at index from array

const choices = ["Rock","Paper","Scissors"];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * choices.length)
    console.log(choice)
}
