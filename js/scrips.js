let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => playRound("Rock"));

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => playRound("Paper"));

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => playRound("Scissors"));


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
    if (humanChoice === computerChoice) {
        console.log(`You chose ${humanChoice}!`);
        console.log("It's a tie!");
        console.log(`Player Score: ${humanScore} --- Computer Score: ${computerScore}`);
        return "Tie";
       } else if (
            (humanChoice === "Rock") && (computerChoice === "Scissors") ||
            (humanChoice === "Paper") && (computerChoice === "Rock") ||
            (humanChoice === "Scissors") && (computerChoice === "Paper") ) {
                console.log(`You chose ${humanChoice}!`)
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
                console.log(`Player Score: ${humanScore} --- Computer Score: ${computerScore}`);
            return "Player wins";
        }
        else if (
            (computerChoice === "Paper") && (humanChoice === "Rock") ||
            (computerChoice === "Rock") && (humanChoice === "Scissors") ||
            (computerChoice === "Scissors") && (humanChoice === "Paper") ) {
                console.log(`You chose ${humanChoice}!`)
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
                console.log(`Player Score: ${humanScore} --- Computer Score: ${computerScore}`);
            return "Player loses";
        }
    else {
        console.log("An error must have ocurred");
        return "Error";
   }
}

