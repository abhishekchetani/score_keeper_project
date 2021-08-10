// Selecting The Score To Be Displayed / Updated using querySelector
const p1ScoreBoard = document.querySelector('#p1Score');
const p2ScoreBoard = document.querySelector('#p2Score');

// Selecting The Respective Player & Reset Buttons
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');

// Selecting The Winning Game Point 'select' Tag
const winningGamePoint = document.querySelector('#gamePoint');
// Checking the Select value in Console
// console.log(winningGamePoint.value)

// Initializing The Scores To Be 0
let p1Score = 0;
let p2Score = 0;
// Player With Threshold Game Point Will Win
let winningScore = parseInt(winningGamePoint.value);
// Starting the Game
let isGameOver = false;

// Listening For Click Event On Player 1 Button
p1Button.addEventListener('click', (evt) => {
    // console.log(evt);
    // Playing Game & Updating The Score Till A Player Wins
    if (!isGameOver) {
        p1Score += 1;
        p1ScoreBoard.innerText = p1Score;
    }

    // Setting The isGameOver Value To 'true' & Giving Color Classes
    if (p1Score === winningScore) {
        isGameOver = true;
        p1ScoreBoard.classList.add('winner');
        p2ScoreBoard.classList.add('loser');
        // p1ScoreBoard.classList.add('has-text-success');     //Using BULMA Framework Color Classes
        // p2ScoreBoard.classList.add('has-text-danger');

        // Disabling The Buttons
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
})

// Listening For CLicks On Player 2 Button
p2Button.addEventListener('click', (evt) => {
    // Continuing Game Till A Player Wins
    if (!isGameOver) {
        p2Score += 1;
        p2ScoreBoard.innerText = p2Score;
    }
    // Defining Color Classes For Winner & Loser
    if (p2Score === winningScore) {
        isGameOver = true;
        p2ScoreBoard.classList.add('winner');
        p1ScoreBoard.classList.add('loser');
        // p2ScoreBoard.classList.add('has-text-success');
        // p1ScoreBoard.classList.add('has-text-danger');

        // Disabling The Buttons
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
})

// Function To Reset The Game Board Completely
function resetGame() {
    p1Score = 0;
    p2Score = 0;
    p1ScoreBoard.innerText = 0;
    p2ScoreBoard.innerText = 0;
    isGameOver = false;
    p1ScoreBoard.classList.remove('winner', 'loser');
    p2ScoreBoard.classList.remove('winner', 'loser');
    // p1ScoreBoard.classList.remove('has-text-success', 'has-text-danger');
    // p2ScoreBoard.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}

// Clicking The Game Reset Button
resetButton.addEventListener('click', resetGame)

// Setting The 'winningScore' Value To The Selected Value & Resetting Game If It Is Changed
winningGamePoint.addEventListener('change', (evt) => {
    winningScore = parseInt(winningGamePoint.value);
    resetGame();
})