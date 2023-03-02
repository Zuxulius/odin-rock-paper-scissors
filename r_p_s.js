/* A little program to play rock, paper, scissors in the console. */

function getComputerChoice() {
    // Math.random gives number between 0 and 1, not including 1
    // Multiplying that by the length of the array gives you any number
    // between 0 and length of array.
    // Flooring it gives you an integer between 0(inclusive)
    // and the length of the array (non inclusive)
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function removeImgs() {
    let imgs = document.querySelectorAll("img");
    for (img of imgs) {
        img.parentNode.remove();
    }
}

function set_stage(player, computer) {
    div = document.querySelector("div");

    playah = document.createElement('img');
    playah.src = player;
    playah.className = "competitors";

    computah = document.createElement('img');
    computah.src = computer;
    computah.className = "competitors";

    removeImgs();
    h1 = document.querySelector('h1');
    h1.innerHTML = playRound(player, computer);

    button = document.createElement('button');
    button.textContent = 'Play again?';
    button2 = document.createElement('button');
    button2.textContent = 'Reset score'

    div.insertAdjacentElement('beforebegin', h1);
    div.insertAdjacentElement('afterend', button2);
    div.insertAdjacentElement('afterend', button);
    div.appendChild(playah);
    div.appendChild(computah);

    button.addEventListener('click', playAgain);
    button2.addEventListener('click', reset);

}

function choose(e) {
    const clickedImg = e.target;
    const player = clickedImg.src;
    set_stage(player, computer);
}

function playRound(player, computer) {
    if (player === computer) return `${pScore}-${cScore}<br>Booo, it's a tie..`
    if ( (player === boulder && computer === cutters) ||
    (player === papyrus && computer === boulder) ||
    (player === cutters && computer === papyrus)) {
        pScore++;
        sound = document.createElement('audio');
        sound.src = mappings[player];
        sound.play();
        return `You win!<br>Player ${pScore} - ${cScore} Computer`;
    } else {
        cScore++;
        sound = document.createElement('audio');
        sound.src = mappings[computer];
        sound.play();
        return `You lose!<br>Player ${pScore} - ${cScore} Computer`;
    }
}

function playAgain() {
    if (pScore < 5 && cScore < 5) {
        document.body.innerHTML = index;
        head = document.querySelector('h1');
        head.textContent = `Player ${pScore} - ${cScore} Computer`;

        for (img of imgs) {
            img.addEventListener('click', choose);
        }
        computer = getComputerChoice();
    } else {
        head = document.querySelector('h1');
        winner = pScore > cScore ? mappings.pScore: mappings.cScore;
        head.innerHTML = `${winner} is victorious!<br>Player ${pScore} - ${cScore} Computer`;
        document.querySelector('button').remove();
    }
}

function reset() {
    document.body.innerHTML = index;
    pScore = 0;
    cScore = 0;
    
    for (img of imgs) {
        img.addEventListener('click', choose);
    }
}

const boulder = "https://images.unsplash.com/photo-1525857597365-5f6dbff2e36e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";

const papyrus = "https://images.unsplash.com/photo-1655923478826-ef7c2d40820e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

const cutters = "https://images.unsplash.com/photo-1621446113284-53ca198c7fa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"; 

const choices = [boulder, papyrus, cutters];

const mappings = {
    pScore: 'Player', 
    cScore: 'Computer',
    "https://images.unsplash.com/photo-1655923478826-ef7c2d40820e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80": 'sounds/papyrus.wav',
    "https://images.unsplash.com/photo-1525857597365-5f6dbff2e36e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80": 'sounds/boulder.wav',
    "https://images.unsplash.com/photo-1621446113284-53ca198c7fa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80": 'sounds/scissors.wav'    
};

let pScore = 0;
let cScore = 0;
let index = document.body.innerHTML;
let imgs = document.getElementsByClassName("img");
let computer = getComputerChoice();

for (img of imgs) {
    img.addEventListener('click', choose)
}

