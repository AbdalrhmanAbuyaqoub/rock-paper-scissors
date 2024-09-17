const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
const computerWon = "!!!YOU LOST!!!";
const humanWon = "!!!YOU WON!!!";
const tie = "!!!TIE!!!";
const gameOver = "!!! GAME OVER !!!";
const youAreTheWinner = "!!! YOU ARE THE WINNER !!!";

const resultDiv = document.querySelector(".result");
const yourScoreDiv = document.querySelector("#your-score");
const computerScoreDiv = document.querySelector("#computer-score");

let humanScore = 0;
let computerScore = 0;

document.addEventListener("click", function playGame(event) {
  let humanChoice = event.target.innerText.toUpperCase();

  if (computerScore === 5 || humanScore === 5) {
    humanScore = 0;
    computerScore = 0;
  }
  if (
    humanChoice === rock ||
    humanChoice === paper ||
    humanChoice === scissors
  ) {
    play(humanChoice);
  }
});

function play(humanChoice) {
  let roundResults = "";

  if (computerScore < 5 && humanScore < 5) {
    roundResults = playRound(humanChoice, getComputerChoice());
    resultDiv.innerText = roundResults;

    if (roundResults === computerWon) {
      computerScore++;
    } else if (roundResults === humanWon) {
      humanScore++;
    }
    yourScoreDiv.innerText = humanScore;
    computerScoreDiv.innerText = computerScore;
    alertIfDone();
  }
}
function alertIfDone() {
  if (computerScore === 5 || humanScore === 5) {
    computerScore > humanScore ? alert(gameOver) : alert(youAreTheWinner);
  }
}

function getComputerChoice() {
  let r = Math.random();
  if (r >= 0 && r < 0.33) {
    return rock;
  } else if (r >= 0.33 && r < 0.66) {
    return paper;
  } else if (r >= 0.66 && r < 1) {
    return scissors;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return tie;
  } else if (computerChoice === rock && humanChoice === scissors) {
    return computerWon;
  } else if (computerChoice === scissors && humanChoice === paper) {
    return computerWon;
  } else if (computerChoice === paper && humanChoice === rock) {
    return computerWon;
  } else {
    return humanWon;
  }
}
