// Rock, paper, scissors: 1 round between computer and player
// 
// function getComputerChoice() {
//     let randomNumber = Math.floor(Math.random() * 3)
//     if (randomNumber === 0) {
//         return "Rock";
//     } else if (randomNumber === 1) {
//         return "Paper";
//     } else if (randomNumber === 2) {
//         return "Scissors";
//     }
// }
// console.log(getComputerChoice());

// let getPlayerChoice = prompt("Rock, Paper or Scissors?");

// console.log(getPlayerChoice);

// function playRound(playerSelection, computerSelection) {
//     let playerChoice = playerSelection.toLowerCase();
//     let computerChoice = computerSelection.toLowerCase();    
//     if (playerChoice === "rock" && computerChoice === "scissors") {
//         return "You win! Rock beats scissors.";
//     } else if (playerChoice === "scissors" && computerChoice === "paper") {
//         return "You win! Scissors beats paper.";
//     } else if (playerChoice === "paper" && computerChoice === "rock") {
//         return "You win! Paper beats rock.";
//     } else if (playerChoice === "rock" && computerChoice === "paper") {
//         return "You lose! Paper beats rock.";
//     } else if (playerChoice === "paper" && computerChoice === "scissors") {
//         return "You lose! Scissors beats paper.";
//     } else if (playerChoice === "scissors" && computerChoice === "rock") {
//         return "You lose! Rock beats scissors.";
//     } return "You tied - play again!"
// }
// const playerSelection = getPlayerChoice;
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// 
// Rock, paper, scissors: 5 rounds between computer and player
// 
// Pseudocode
// Play 5 rounds of the rock, paper, scissors game
// Use a for loop and increment +1 each round for 5 rounds
// Prompt the player each time for a new choice
// Include the function for the computer's choice to be randomly picked
// Include the function for one round to be played with its results
// Keep the resuts of each round for each player
// At the end of all rounds show the final results

// function playGame() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (i = 0; i < 5; i++) {
//         const playerSelection = prompt("Rock, Paper or Scissors?");
//         const computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//         console.log(result);
//         if (result === "Player wins.") {
//             playerScore += 1;
//         } else if (result === "Computer wins.") {
//             computerScore += 1;
//         }
//     }
//     function getFinalResult() {
//         if (playerScore > computerScore) {
//             return "Well done! You're the winner!"
//         } else if (computerScore > playerScore) {
//             return "You lost! Better luck next time!"
//         } return "It's a draw!"
//     }
//     console.log(getFinalResult());
// }

// function getComputerChoice() {
//     let randomNumber = Math.floor(Math.random() * 3)
//     if (randomNumber === 0) {
//         return "Rock";
//     } else if (randomNumber === 1) {
//         return "Paper";
//     } else if (randomNumber === 2) {
//         return "Scissors";
//     }
// }

// function playRound(playerSelection, computerSelection) {
//     let playerChoice = playerSelection.toLowerCase();
//     let computerChoice = computerSelection.toLowerCase();    
//     if (playerChoice === "rock" && computerChoice === "scissors") {
//         result = "Player wins.";
//     } else if (playerChoice === "scissors" && computerChoice === "paper") {
//         result = "Player wins.";
//     } else if (playerChoice === "paper" && computerChoice === "rock") {
//         result = "Player wins.";
//     } else if (playerChoice === "rock" && computerChoice === "paper") {
//         result = "Computer wins.";
//     } else if (playerChoice === "paper" && computerChoice === "scissors") {
//         result = "Computer wins.";
//     } else if (playerChoice === "scissors" && computerChoice === "rock") {
//         result = "Computer wins.";
//     } else if (playerChoice = computerChoice) {
//         result = "Draw.";
//     }
// }

// playGame();

// Rock, paper, scissors: 5 rounds between computer and player using buttons

// Pseudocode
// Create three buttons for the player to choose rock, paper or scissors
// Add event listeners to the buttons that call the function to play a round
// Each button should play a round with that button's name as the player's choice
// Add DOM methods to display the results of the computer's choice and the winner of each round
// Keep a result of and display a running score of the game
// Finish the game when the first player reaches five wins and rset the scores to 0 for both players

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else if (randomNumber === 2) {
        return "scissors";
    }
}

function playRound(playerChoice) {
    computerChoice = getComputerChoice();
    document.querySelector("#computerHand").textContent = `The computer chooses ${computerChoice}.`;
    if (playerChoice === "rock" && computerChoice === "scissors") {
        result = "You win!";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        result = "You win!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        result = "You win!";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        result = "The computer wins.";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        result = "The computer wins.";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        result = "The computer wins.";
    } else if (playerChoice === computerChoice) {
        result = "It's a draw.";
    }
    document.querySelector("#scorePerRound").textContent = result;
    if (result === "You win!") {
        playerScore += 1;
    } else if (result === "The computer wins.") {
        computerScore += 1;
    }
    getFinalResult();
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

let playerScore = 0;
let computerScore = 0;

function getFinalResult() {
    if (playerScore < 5 && computerScore < 5) {
        document.querySelector("#finalScore").textContent = `Your score: ${playerScore}, the computer's score: ${computerScore}. Play another round.`;
    } else if (playerScore === 5) {
        document.querySelector("#finalScore").textContent = "You win 5 games! Start again!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        document.querySelector("#finalScore").textContent = "The computer wins 5 games! Start again!";
        playerScore = 0;
        computerScore = 0;
    }
}

const computerHand = document.querySelector("#computerHand");
const scorePerRound = document.querySelector("#scorePerRound");
const finalScore = document.querySelector("#finalScore");