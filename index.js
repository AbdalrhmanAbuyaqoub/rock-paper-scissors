const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
const computerWon = "!!!YOU LOST!!!";
const humanWon = "!!!YOU WON!!!";

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  return prompt("Enter Your Choice: ");
}

function playRound(humanChoice, computerChoice) {
  // rock > scissors
  // scissors > paper
  // paper > rock
  if (humanChoice != rock && humanChoice != paper && humanChoice != scissors) {
    return "WRONG INPUT!";
  } else if (humanChoice === computerChoice) {
    return "!!!TIE!!!";
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

function playGame() {
  let roundResults;

  for (let i = 1; i <= 5; i++) {
    roundResults = playRound(
      getHumanChoice().toUpperCase(),
      getComputerChoice()
    );

    console.log(roundResults);

    if (roundResults === computerWon) {
      computerScore++;
    } else if (roundResults === humanWon) {
      humanScore++;
    }
    console.log("your score:" + humanScore);
    console.log("computer score:" + computerScore);
  }

  if (computerScore === humanScore) {
    console.log("!!! TIE !!!");
  } else if (computerScore > humanScore) {
    console.log("!!! GAME OVER !!!");
  } else console.log("!!! YOU ARE THE WINNER !!!");
}
