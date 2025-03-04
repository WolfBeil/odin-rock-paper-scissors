
function getComputerChoice(choices) {
    let computerChoice = Math.floor(Math.random() * choices);
    switch (computerChoice) {
        case 0:
            console.log("Rock")
            return "Rock";
        case 1:
            console.log("Paper")
            return "Paper";
        case 2:
            console.log("Scissors")
            return "Scissors";
        default:
            console.log("Error")
            return "Error";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please type your choice: Rock, paper or scissors?").toLowerCase();
    switch (humanChoice) {
        case 'rock':
            console.log("Rock")
            return "Rock";
        case 'paper':
            console.log("Paper")
            return "Paper";
        case 'scissors':
            console.log("Scissors")
            return "Scissors";
        default:
            console.log("Please type a valid option")
            return "Please type a valid option";
    }
}

let humanScore = 0;
let computerScore = 0;

// The rounds argument will dictate how many rounds will be played

function playGame(rounds) {

    for (let index = 0; index < rounds; index++) {

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice(3);

        function playRound(humanChoice, computerChoice) {
            if (humanChoice === computerChoice) {
                console.log("It's a tie!")
                return "Tie";
               } else if (
                    (humanChoice === "Rock") && (computerChoice === "Scissors") ||
                    (humanChoice === "Paper") && (computerChoice === "Rock") ||
                    (humanChoice === "Scissors") && (computerChoice === "Paper") ) {
                    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                    humanScore++;
                    return "Player wins";
                }
                else if (
                    (computerChoice === "Paper") && (humanChoice === "Rock") ||
                    (computerChoice === "Rock") && (humanChoice === "Scissors") ||
                    (computerChoice === "Scissors") && (humanChoice === "Paper") ) {
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                    computerScore++;
                    return "Player loses";
                }
                else {
                    console.log("An error must have ocurred")
                    return "Error";
               }
        }
        
        playRound(humanSelection, computerSelection);

    }
}

playGame(5);
console.log(`Player Score: ${humanScore} --- Computer Score: ${computerScore}`);