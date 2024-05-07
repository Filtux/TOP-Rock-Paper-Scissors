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

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
        document.querySelector(".round-output")
            .textContent = "It's a tie!";
        return;
    }

    if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice)
        document.querySelector(".round-output")
            .textContent = "You win! " + humanChoice + " beats " + computerChoice;
        document.querySelector(".player-score")
            .textContent = "Your Score: " + (++humanScore)
        console.log(humanScore)
        detectWinner(humanScore, computerScore);
        return;
    }

    else {
        console.log(("You lose! " + computerChoice + " beats " + humanChoice))
        document.querySelector(".round-output")
            .textContent = "You lose! " + computerChoice + " beats " + humanChoice;
        document.querySelector(".computer-score")
            .textContent = "Computer Score: " + (++computerScore)
        detectWinner(humanScore, computerScore);
        return;
    }

}

function detectWinner() {

    if (humanScore === 5) {
        document.querySelector(".scores").appendChild(document.createElement("div"))
        .textContent = "You have won the game!";
        humanScore = 0;
        computerScore = 0;
        document.querySelector(".player-score").textContent = "Your Score: " + (humanScore)
        document.querySelector(".computer-score").textContent = "Computer Score: " + (computerScore)

    }

    if (computerScore === 5) {
        document.querySelector(".scores").appendChild(document.createElement("div"))
            .textContent = "You have lost the game!";
        humanScore = 0;
        computerScore = 0;
        document.querySelector(".player-score").textContent = "Your Score: " + humanScore;
        document.querySelector(".computer-score").textContent = "Computer Score: " + computerScore;
    }

    return;

}

document.querySelector("#button-rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

document.querySelector("#button-paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

document.querySelector("#button-scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});