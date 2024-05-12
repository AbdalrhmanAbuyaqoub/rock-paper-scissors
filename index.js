const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";

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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const computerWon = "!!!YOU LOST!!!";
  const humanWon = "!!!YOU WON!!!";

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

const humanSelection = getHumanChoice().toUpperCase();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);

let results = playRound(humanSelection, computerSelection);
console.log(results);
