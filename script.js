const options = ['rock', 'paper', 'scissors'];
const resultDiv = document.getElementById('result');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const resetButton = document.getElementById('reset');

let playerScore = 0;
let computerScore = 0;

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
resetButton.addEventListener('click', resetScores);

function playGame(playerChoice) {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    let result;

    if (playerChoice === computerChoice) {
        result = `It's a tie! Both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerScore++;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}.`;
        computerScore++;
    }

    resultDiv.textContent = result;
    updateScoreboard();
}

function updateScoreboard() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    updateScoreboard();
    resultDiv.textContent = '';
}
