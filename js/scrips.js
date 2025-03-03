let humanScore = 0;
let computerScore = 0;

function getComputerChoice(choices) {
    let computerChoice = Math.floor(Math.random() * choices);
    switch (computerChoice) {
        case 0:
            console.log("Rock")
            break;
        case 1:
            console.log("Paper")
            break;
        default:
            console.log("Scissors")
            break;
    }
}

function getHumanChoice() {
    let choice = prompt("Please type your choice: Rock, paper or scissors?").toLowerCase();
    switch (choice) {
        case "rock":
            console.log("Rock")
            break;
        case 'paper':
            console.log("Paper")
            break;
        case 'scissors':
            console.log("Scissors")
            break;
        default:
            console.log("Please type a valid option")
            break;
    };
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
