// Storing each Player's data in a Separate Object
const p1 = {
    score: 0,                                               // initializing score to 0
    button: document.querySelector("#p1Button"),             // selecting the Player button
    scoreBoard: document.querySelector("#p1Score")          // selecting the Score to be displayed
}

// Object for Player 2
const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    scoreBoard: document.querySelector("#p2Score")
}

// Reset Button & Select Tag for Game Point
const resetButton = document.querySelector("#reset");
const winningGamePoint = document.querySelector("#gamePoint");

// Parsing the Select Tag Value
let winningScore = parseInt(winningGamePoint.value);
let isGameOver = false;                                     // starting the game

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;

            player.scoreBoard.classList.add('has-text-success');
            opponent.scoreBoard.classList.add('has-text-danger');

            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.scoreBoard.textContent = player.score;
    }
}

p1.button.addEventListener('click', () => {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', () => {
    updateScores(p2, p1);
})