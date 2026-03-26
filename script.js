/*******************Variables of each roll ****************/
let playerRoll1 = 0
let playerRoll2 = 0
let computerRoll1 = 0
let computerRoll2 = 0
let getPlayerTotal = 0
let getComputerTotal = 0
let playerScore = 0
let computerScore = 0

/****************** function to display what each player rolled ************/

function displayRolls() {
    document.getElementById("playerDice").innerHTML = `Player rolled a ${playerRoll1} and a ${playerRoll2}.`
    document.getElementById("computerDice").innerHTML = `Computer rolled a ${computerRoll1} and a ${computerRoll2}.`
}
document.getElementById("rollButton").addEventListener("click", rollDice)

/*********** function to generate random dice rolls ***************/
function rollDice() {
    playerRoll1 = Math.floor(Math.random() * 6)+ 1;
    playerRoll2 = Math.floor(Math.random() * 6) + 1;
    computerRoll1 = Math.floor(Math.random() * 6) + 1;
    computerRoll2 = Math.floor(Math.random() * 6) + 1;
    displayRolls()
    calculateScore()
    displayResults()
}



/*********** function to calculate the result, determine winner, and update the score ***************/
// calculateScore
function calculateScore() {
    getPlayerTotal = playerRoll1 + playerRoll2
    getComputerTotal = computerRoll1 + computerRoll2

    document.getElementById("playerTotal").innerHTML = `Player rolled ${getPlayerTotal} total.`    
    document.getElementById("computerTotal").innerHTML = `Computer rolled ${getComputerTotal} total.`
}



/*********** function to display the current roll and scores ***************/
function displayResults() {
    if (getPlayerTotal > getComputerTotal){
        document.getElementById("winner").innerHTML = `Congrats, you won!` 
        playerScore += 1;
        document.getElementById("score").innerHTML = `Your score is ${playerScore} and the computer's score is ${computerScore}.` 
    } else if (getPlayerTotal < getComputerTotal){
        document.getElementById("winner").innerHTML = `Sorry, the computer won!`
        computerScore += 1; 
        document.getElementById("score").innerHTML = `Your score is ${playerScore} and the computer's score is ${computerScore}.`
    } else {
        document.getElementById("winner").innerHTML = `Tie!`
    }
}





