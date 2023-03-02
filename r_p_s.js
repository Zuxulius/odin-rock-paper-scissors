/* A little program to play rock, paper, scissors in the console. */

// const choices = ["Boulder","Papyrus","Cutters"];
//
// function getComputerChoice() {
//     // Math.random gives number between 0 and 1, not including 1
//     // Multiplying that by the length of the array gives you any number
//     // between 0 and length of array.
//     // Flooring it gives you an integer between 0(inclusive)
//     // and the length of the array (non inclusive)
//     let choice = Math.floor(Math.random() * choices.length);
//     return choices[choice];
// }
//
// function playRound(player_selection, computerSelection) {
//     const player = player_selection.toLowerCase();
//     const computer = computerSelection.toLowerCase();
//
//     // Handle bad input
//     if (player !== "rock" && player !== "paper" && player !== "scissors") {
//         return "Faulty input. Pick either rock, paper or scissors."
//     }
//
//     if (player === computer) {
//         return `Player chose: ${player}. Computer chose: ${computer}. It's a tie!`;
//
//     } else if ((player === "rock" && computer === "scissors") ||
//     (player === "paper" && computer === "rock") ||
//     (player === "scissors" && computer === "paper")) {
//         return `Player chose: ${player}. Computer chose: ${computer}. You won!`;
//
//     } else {
//         return `Player chose: ${player}. Computer chose: ${computer}. You lose!`;
//     }
// }
//
// function game(rounds) {
//     for (let i = 0; i < rounds; i++) {
//         // const player = prompt("Rock, paper, scissors!");
//         const computer = getComputerChoice();
//         console.log(playRound(player, computer));
//     }
// }
//
// const rounds = 5;
//
// game(rounds);

const imgs = document.getElementsByClassName("pic-container");
    
function choose(e) {
    const clickedImg = e.target;
    clickedImg.style.width = "35vh";
    clickedImg.style.height = "35vh";
    
}

for (img of imgs) {
    img.addEventListener('click', choose)
};
