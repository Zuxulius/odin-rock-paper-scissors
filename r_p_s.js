/* A little program to play rock, paper, scissors in the console. */

boulder = "https://images.unsplash.com/photo-1525857597365-5f6dbff2e36e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"

papyrus = "https://images.unsplash.com/photo-1655923478826-ef7c2d40820e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

cutters = "https://images.unsplash.com/photo-1621446113284-53ca198c7fa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"; 

const choices = [boulder, papyrus, cutters];

function getComputerChoice() {
    // Math.random gives number between 0 and 1, not including 1
    // Multiplying that by the length of the array gives you any number
    // between 0 and length of array.
    // Flooring it gives you an integer between 0(inclusive)
    // and the length of the array (non inclusive)
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}
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

function removeImgs() {
    const x = document.querySelectorAll("img");
    for (img of x) {
        img.parentNode.remove();
    }
}

function add_competitors(player, computer) {
    div = document.querySelector("div");

    playah = document.createElement('img');
    playah.src = player;
    playah.className = "competitors";

    computah = document.createElement('img')
    computah.src = computer;
    computah.className = "competitors";

    div.appendChild(playah);
    div.appendChild(computah);
}

function choose(e) {
    const clickedImg = e.target;
    const player = clickedImg.src;
    removeImgs();
    document.querySelector('h1').remove();
    add_competitors(player, computer);

    }

const imgs = document.getElementsByClassName("img");

let computer = getComputerChoice();

for (img of imgs) {
    img.addEventListener('click', choose)
};


