let playerScore = 0;
let computerScore = 0;
function computerPlay() {
    let random = Math.random();
    play = random < 0.33 ? "Rock" : random < 0.66 ? "Paper" : "Scissors";
    return play;
};

function playRound(e) {
    computerSelection = computerPlay()
    playerSelection = e.target.id
    displayResult( drawGame(computerSelection, playerSelection)
    ? `Draw game! You both chose ${computerSelection}!`
    : computerWin(computerSelection, playerSelection)
    ? `You Lose! ${computerSelection} beats ${playerSelection}!`
    : `You Win! ${playerSelection} beats ${computerSelection}!`
    );
    scoreKeeper();
    displayScore(playerScore, computerScore);
    if (checkGameEnd()) {
        location.reload();
    };
};

function displayResult(result) {
    const div = document.querySelector('#resultDiv');
    const p = document.querySelector('#result');
    p.textContent = result;
};

function scoreKeeper() {
    const p = document.querySelector('#result')
    if (p.textContent.search("Lose") >= 0) {
            computerScore++;
    }else if (p.textContent.search("Win") >= 0) {
            playerScore++;
    };
};

function displayScore(score1, score2) {
    const playerScoreDiv = document.querySelector('#playerScoreColumn');
    const computerScoreDiv = document.querySelector('#computerScoreColumn');
    const playerScore = document.querySelector('#playerScore');
    const computerScore = document.querySelector('#computerScore');
    if (score1 > playerScore.textContent) {
        playerScore.textContent = score1
        playerScoreDiv.classList.add('addPoint')
    };
    if (score2 > computerScore.textContent) {
        computerScore.textContent = score2;
        computerScoreDiv.classList.add('addPoint')
    }

};

function checkGameEnd() {
    if (playerScore === 5) {
        alert("You Won! Click OK to Play Again")
        return 1
    }else if (computerScore === 5) {
        alert("You Lost! Click OK to Play Again")
        return 1
    }
};

function drawGame(computerSelection, playerSelection) {
    return computerSelection == playerSelection ? true : false;
};

function computerWin(computerSelection, playerSelection) {
    return ( computerSelection == "Rock" && playerSelection == "Scissors"
        ? true
        : computerSelection == "Paper" && playerSelection == "Rock"
        ? true
        : computerSelection == "Scissors" && playerSelection == "Paper"
        ? true
        : false
    );
};

function addPoint(e) {
    console.log(e)
};

function clearAddPoints() {
    const divToClear = document.querySelector('.addPoint');
    divToClear.classList.remove('addPoint')
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', clearAddPoints)
    button.addEventListener('click', playRound)
});