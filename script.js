let computerScore = 0;
let playerScore = 0;
let playerChoice = "";

const totalOptions = ["rock","paper","scissors"];
let currentScore = document.querySelector("score")

function computerChooseOption(){

    let randomNum = Math.floor(Math.random()*3)+1;

    switch(randomNum){
        case 1:
            return totalOptions[0];
            break;
        case 2:
            return totalOptions[1];
            break;
        case 3:
            return totalOptions[2];
            break;
    }
}

function gameExecutes(playerChoice){
    let computerChoice = computerChooseOption();

    if((computerChoice == "rock" && playerChoice == "paper") || (computerChoice == "paper" && playerChoice == "scissors") || (computerChoice == "scissors" && playerChoice == "rock")){
        ++playerScore;
    }
    else if(computerChoice != playerChoice){
        ++computerScore;
    }
    currentScore.textContent = "Current Score: " + playerScore + " - " + computerScore;
   
    if(computerScore == 5 || playerScore == 5)
    {
        if(computerScore > playerScore)
        {
            currentScore.textContent = "Computer Wins, " + playerScore + " - " + computerScore;
        }
        else
        {
            currentScore.textContent = "Player Wins, " + playerScore + " - " + computerScore;
        }
        computerScore = 0;
        playerScore = 0;
    }
}

const buttonContainer = document.querySelector("buttons");

const rockButton = buttonContainer.querySelector("#rock");
const paperButton = buttonContainer.querySelector("#paper");
const scissorButton = buttonContainer.querySelector("#scissors");

let counter = 0;

function counterIncrease(){
    
    counter++;
    currentScore.textContent = counter;
}

;

// Inbetween these comments add the pressing button functions

rockButton.addEventListener("click",function(){
    gameExecutes(totalOptions[0]);
});
    

paperButton.addEventListener("click",function(){
    gameExecutes(totalOptions[1]);
});

scissorButton.addEventListener("click",function(){
    gameExecutes(totalOptions[2]);
});



