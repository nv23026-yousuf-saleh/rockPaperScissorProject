function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors:").toLowerCase();
}

console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
  if (getComputerChoice === getHumanChoice) {
    return "Tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "you win!";
  } else {
    return "Computer won!";
  }
}

console.log(playRound(humanChoice, computerChoice))

const humanSelection = getHumanChoice
const computerchoice = getComputerChoice

for () 
