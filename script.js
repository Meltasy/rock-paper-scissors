function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else if (randomNumber === 2) {
        return "Scissors";
    }
}
console.log(getComputerChoice());

let getPlayerChoice = prompt("Rock, Paper or Scissors?");

console.log(getPlayerChoice);

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();    
    if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats scissors.";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beats paper.";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper beats rock.";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "You lose! Scissors beats paper.";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "You lose! Rock beats scissors.";
    } return "You tied - play again!"
}
const playerSelection = getPlayerChoice;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
