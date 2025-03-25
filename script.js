function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  let randomizeChoice = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[randomizeChoice];
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Enter your choice: Rock, Paper, or Scissors"
  ).toLowerCase();
  if (!["rock", "paper", "scissors"].includes(humanChoice)) {
    alert("Invalid choice, please enter Rock, Paper, or Scissors");
    return getHumanChoice();
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win this round!";
  } else {
    return "Computer wins this round!";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    console.log(`Round ${i + 1}:`);
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(result);

    if (result.includes("You win")) {
      humanScore++;
    } else if (result.includes("Computer wins")) {
      computerScore++;
    }
  }

  console.log("Final Scores:");
  console.log(`You: ${humanScore} | Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game! Better luck next time.");
  } else {
    console.log("It's a tie game!");
  }
}

playGame();
