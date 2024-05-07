let humanScore = 0;
let computerScore = 0;

function getComputerChoice()  {

    let randomNumber = Math.floor(Math.random() * 3);
    
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {

    let humanChoice;

    while (true) {

        humanChoice = prompt("Select 'rock', 'paper', or 'scissors'").toLowerCase();

        if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
            break;
        }
        
        else {
            alert ("Choice is invalid, select 'rock', 'paper', or 'scissors'")
        }
 
    }

    return humanChoice;
    
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
        return;
    }

    if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice)
        humanScore ++;
        return;
    }

    else {
        console.log(("You lose! " + computerChoice + " beats " + humanChoice))
        computerScore ++;
        return;
    }

}

/* function playGame() {

    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection)

        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + computerScore)

    }

    if (humanScore === computerScore) {
        console.log("You both finished with the same score, there is no winner!")
        return;
    }

    if (humanScore > computerScore) {
        console.log("You have won the game!")
    }

    else {
        console.log("You have lost the game!")
    }

} */


document.querySelector("#button-rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

document.querySelector("#button-paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

document.querySelector("#button-scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});