//Make all the variables needed and DOM method.
const possibleChoices = document.querySelectorAll('button');
const resultDisplay = document.querySelector('#result');
const computerScoreDisplay = document.querySelector('#computer-score');
const playerScoreDisplay = document.querySelector('#player-score');
let computerScore = 0;
let playerScore = 0;
let result = "";
let playerSelection;
let computerSelection;
let round;

//Make Function to get computer choice.
function getComputerChoice(){
    let randomChoice;
    randomChoice = Math.floor(Math.random()*3+1);
    let computerChoice;

    if( randomChoice === 1){
        computerChoice = "rock";
    }

    if( randomChoice === 2){
        computerChoice = "scissor";
    }

    if( randomChoice === 3){
        computerChoice = "paper";
    }

    return computerChoice;
}
//Make Function to play a single move against computer.
function playRound ( playerSelection , computerSelection ){

    if (computerSelection === playerSelection){

        return "It's a draw";

    }
    if (computerSelection === "rock" && playerSelection === "paper"){
      
        return "You win! Paper beats Rock";

    }

    if (computerSelection === "rock" && playerSelection === "scissor"){
      
        return "You lose! Rock beats Scissor";
        
    }

    if (computerSelection === "scissor" && playerSelection === "rock"){
      
        return "You win! Rock beats Scissor";
        
    }

    if (computerSelection === "scissor" && playerSelection === "paper"){
      
        return "You lose! Scissor beats Paper";
        
    }

    if (computerSelection === "paper" && playerSelection === "scissor"){
      
        return "You win! Scissor beats Paper";
        
    }
    if (computerSelection === "paper" && playerSelection === "rock"){
      
        return "You lose! Paper beats Rock";
        
    }
}

//Final function  to play a round with computer when a button is clicked.
function game(){
   
        possibleChoices.forEach(button => button.addEventListener('click' , (e) => {
        if(computerScore < 5 && playerScore < 5){
        playerSelection = e.target.id
        computerSelection =  getComputerChoice();
        round = playRound(playerSelection , computerSelection);
        resultDisplay.innerText = round;
        if( round == "You win! Paper beats Rock" ||    round == "You win! Scissor beats Paper" || round == "You win! Rock beats Scissor" ){
         playerScore += 1
         playerScoreDisplay.innerText = playerScore;
        }
        else if( round == "It's a draw"){
        playerScore +=0;
        computerScore +=0;
        }
    
        else{
        computerScore += 1;
        computerScoreDisplay.innerText = computerScore ;
        } 
        
        if(computerScore==5){
            result = "Computer won! Need to work on your skills"
            resultDisplay.innerText = result;
            
        }
        if (playerScore == 5){
            result = "You Won! Victory is yours"
            resultDisplay.innerText = result;
        }
    }
        
      }));
      
}

    game();
    