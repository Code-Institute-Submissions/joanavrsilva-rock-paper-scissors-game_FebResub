// Play and score functions

// Images
const handOptions = {
    'rock': "assets/images/hand-rock.png",
    'paper': "assets/images/hand-paper.png",
    'scissors': "assets/images/hand-scissors.png",
    'spock': "assets/images/hand-spock.png",
    'lizard': "assets/images/hand-lizard.png",
}

// Winning matches

const handwins = {
    'rock': ['scissors', 'lizard'],
    'paper': ['rock', 'spock'],
    'scissors': ['paper', 'lizard'],
    'spock': ['rock', 'scissors'],
    'lizard': ['paper', 'spock']
};

// Score variables
let userScore = 0;
let computerScore = 0;

// Get hands options
var hands = document.getElementById("hands");

//get result section elements
var results = document.getElementById("results");
var userChoice = document.getElementById("userChoiceImage");
var computerChoice = document.getElementById("computerChoiceImage");

// main play function
const userHand = (hand, Level) => {

hands.style.display = "none";  
results.style.visibility = "visible";

// set user Image
userChoice.src = handOptions[hand];

// select function depending on the Level to choose Computer Hand randomly
if (Level==1){
    computerHand = choiceComputerHandL1();
} else{
    computerHand = choiceComputerHandL2();
}

    referee(hand, computerHand);
};

//randomely choose cp hand L1
const choiceComputerHandL1 = () => {
let handsOpts = ['rock', 'paper', 'scissors'];
let computerHand = handsOpts[Math.floor(Math.random() * handsOpts.length)];

// set computer image accordingly
computerChoice.src = handOptions[computerHand];

return computerHand;
};

//randomely choose cp hand L2
const choiceComputerHandL2 = () => {
let handsOpts = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
let computerHand = handsOpts[Math.floor(Math.random() * handsOpts.length)];

// set computer image accordingly
computerChoice.src = handOptions[computerHand];

return computerHand;  
};

// result - tie, win and lose;
const referee = (userHand, computerHand) => {

if (userHand == computerHand) {
    setDecision("It's a tie!","none");
}
else if (handWins[userHand].includes(computerHand)){
    setDecision("You win this round!","your-score");
    SCORE=SCORE + 1;
    setScore(SCORE,"userScore");

    //Display final pop-up - You win - Limit 3 rounds
    if(SCORE==3){
    gameOverPopUp.style.display = "block";
    youWinImg.style.display = "block";
    }

}
else {
    setDecision("Computer wins this round","computer-score");
    computerScore=computerScore + 1;
    setScore(computerScore,"computerScore");

    //Display final pop-up - You lose - Limit 3 rounds
    if(SCORECP==3){
    gameOverPopUp.style.display = "block";
    youLoseImg.style.display = "block";
    }
}
};

//function to restart game
const restartGame = () => {
results.style = "results";
hands.style="hands";
};

//Function to set the decision
const setDecision = (decision, style) => {
document.querySelector(".score-results h1").innerText = decision;
};

//Function to set the score
const setScore = (newScore, id) => {
document.getElementById(id).innerText = newScore;
};
// end -- play & score Functions


// get necessary Pop-up elements
//  get the Pop-up
var gameOverPopUp = document.getElementById("gameOverPopUp");

// get the <span> element that redirects the player home
var goHomeLink = document.getElementsByClassName("goHome")[0];

// get Image you Lose
var youLoseImg = document.getElementById("youLoseImg");

// get Image you Win
var youWinImg = document.getElementById("youWinImg");

//if error occurrs ignore
try {
  // go Home function
  goHomeLink.onclick = function() {
    gameOverPopUp.style.display = "none";
    window.location.href = "index.html";
  };
}
catch (e) {
  //not in the correct page--ignore
};