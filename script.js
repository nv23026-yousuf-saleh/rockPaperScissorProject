// Step 1: Set up scores
let humanScore = 0;
let computerScore = 0;

// Step 2: Get a random computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Step 3: Play one round
function playRound(humanChoice, computerChoice) {
  let resultMessage = `You chose ${humanChoice}. Computer chose ${computerChoice}. `;

  if (humanChoice === computerChoice) {
    resultMessage += "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMessage += `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  } else {
    resultMessage += `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  }

  updateResults(resultMessage);
}

// Step 4: Update results on the page
function updateResults(message) {
  const resultsDiv = document.getElementById('results');
  const scoreDiv = document.getElementById('score');
  resultsDiv.textContent = message;
  scoreDiv.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
}

// Step 5: Check if someone won the game
function checkWinner() {
  if (humanScore === 5) {
    updateResults(' You won the game! ');
    disableButtons();
  } else if (computerScore === 5) {
    updateResults(' Computer won the game! ');
    disableButtons();
  }
}

// Step 6: Disable buttons after game ends
function disableButtons() {
  document.getElementById('rock').disabled = true;
  document.getElementById('paper').disabled = true;
  document.getElementById('scissors').disabled = true;
}

// Step 7: Event listeners for buttons
document.getElementById('rock').addEventListener('click', function() {
  playRound('rock', getComputerChoice());
  checkWinner();
});

document.getElementById('paper').addEventListener('click', function() {
  playRound('paper', getComputerChoice());
  checkWinner();
});

document.getElementById('scissors').addEventListener('click', function() {
  playRound('scissors', getComputerChoice());
  checkWinner();
});
