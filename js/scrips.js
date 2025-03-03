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
    let question = parseInt(prompt("Rock, Paper or Scissors? Type 1 for rock, 2 for paper, and 3 for scissors"));
    switch (question) {
        case 1:
            console.log("Rock")
            break;
        case 2:
            console.log("Paper")
            break;
        case 3:
            console.log("Scissors")
            break;
        default:
            console.log("Please insert a valid option")
            break;
    }
    return question;
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice(3);

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Tie!")
    } else {
        console.log("Shit");
    }
}

playRound();

