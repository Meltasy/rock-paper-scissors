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

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let i = 0;
    for (i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(result);
        if (result === "Player wins.") {
            playerScore += 1;
        } else if (result === "Computer wins.") {
            computerScore += 1;
        }
    }

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

    function playRound(playerSelection, computerSelection) {
        let playerChoice = playerSelection.toLowerCase();
        let computerChoice = computerSelection.toLowerCase();    
        if (playerChoice === "rock" && computerChoice === "scissors") {
            result = "Player wins.";
        } else if (playerChoice === "scissors" && computerChoice === "paper") {
            result = "Player wins.";
        } else if (playerChoice === "paper" && computerChoice === "rock") {
            result = "Player wins.";
        } else if (playerChoice === "rock" && computerChoice === "paper") {
            result = "Computer wins.";
        } else if (playerChoice === "paper" && computerChoice === "scissors") {
            result = "Computer wins.";
        } else if (playerChoice === "scissors" && computerChoice === "rock") {
            result = "Computer wins.";
        } else if (playerChoice = computerChoice) {
            result = "Draw.";
        }
    }

    function finalResult() {
        if (playerScore > computerScore) {
            return "Well done! You're the winner!"
        } else if (computerScore > playerScore) {
            return "You lost! Better luck next time!"
        } return "It's a draw!"
    }
    console.log(finalResult());
}
playGame();