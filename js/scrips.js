let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => playRound("Rock"));

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => playRound("Paper"));

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => playRound("Scissors"));

const results = document.querySelector(".results");

const humanDecision = document.querySelector(".hChoice");

const computerDecision = document.querySelector(".cChoice");

const winner = document.querySelector(".winner");

const score = document.createElement("p");
results.appendChild(score);

function updateScore() {
    score.textContent = `User ${humanScore} --- Computer: ${computerScore}`;
}

updateScore();

function restart(humanPoints, computerPoints) {
    if (humanPoints === 5) {
        alert("You reached five points! You win the game!");
        alert("Pick Rock, Paper or Scissors to play again!");
        humanScore = 0;
        computerScore = 0;
    } else if (computerPoints === 5) {
        alert("The computer reached five points! You lose the game!");
        alert("Pick Rock, Paper or Scissors to play again!");
        humanScore = 0;
        computerScore = 0;
    }
}

function getComputerChoice(choices) {
    let computerChoice = Math.floor(Math.random() * choices);
    switch (computerChoice) {
        case 0:
            console.log("Computer chose Rock");
            return "Rock";
        case 1:
            console.log("Computer chose Paper");
            return "Paper";
        case 2:
            console.log("Computer chose Scissors");
            return "Scissors";
        default:
            console.log("Error")
            return "Error";
    }
}



function playRound(humanChoice) {
    let computerChoice = getComputerChoice(3);
    humanDecision.textContent = humanChoice;
    computerDecision.textContent = computerChoice;
    console.log(`You chose ${humanChoice}!`);
    if (humanChoice === computerChoice) {
        winner.textContent = "It's a tie!";
        console.log("It's a tie!");
        console.log(`Player Score: ${humanScore} --- Computer Score: ${computerScore}`);
        updateScore();
        return "Tie";
       } else if (
            (humanChoice === "Rock") && (computerChoice === "Scissors") ||
            (humanChoice === "Paper") && (computerChoice === "Rock") ||
            (humanChoice === "Scissors") && (computerChoice === "Paper") ) {
                winner.textContent = "You win!";
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
                console.log(`Player Score: ${humanScore} --- Computer Score: ${computerScore}`);
                updateScore();
                restart(humanScore, computerScore);
            return "Player wins";
        }
        else if (
            (computerChoice === "Paper") && (humanChoice === "Rock") ||
            (computerChoice === "Rock") && (humanChoice === "Scissors") ||
            (computerChoice === "Scissors") && (humanChoice === "Paper") ) {
                winner.textContent = "Computer wins!";
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
                console.log(`Player Score: ${humanScore} --- Computer Score: ${computerScore}`);
                updateScore();
                restart(humanScore, computerScore);
            return "Player loses";
        }
    else {
        console.log("An error must have ocurred");
        return "Error";
   }
}

