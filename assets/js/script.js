// Images
const handOptions = {
  'rock': "assets/images/hand-rock.png",
  'paper': "assets/images/hand-paper.png",
  'scissors': "assets/images/hand-scissors.png",
  'spock': "assets/images/hand-spock.png",
  'lizard': "assets/images/hand-lizard.png",
}

// Winning matches
const handWins = {
  'rock': ['scissors', 'lizard'],
  'paper': ['rock', 'spock'],
  'scissors': ['paper', 'lizard'],
  'spock': ['rock', 'scissors'],
  'lizard': ['paper', 'spock']
};

// Score variables
let SCORE = 0;
let SCORECP = 0;

// Get gameElements

// Get hands options
var hands = document.getElementById("hands");

// Get result section elements
var results = document.getElementById("results");
var userPick = document.getElementById("userPickImage");
var cpPick = document.getElementById("computerPickImage");

// Main play function
const playUserHand = (hand, Level) => {
  
  hands.style.display = "none";  
  results.style.visibility = "visible";

  // Set user Image
  userPick.src = handOptions[hand];

  // Select function depending on the Level to choose CpHand randomly
  if (Level==1){
    cpHand = pickComputerHandL1();
  } else{
    cpHand = pickComputerHandL2();
  }

    referee(hand, cpHand);
};

// Randomly choose cp hand L1
const pickComputerHandL1 = () => {
  let handsOpts = ['rock', 'paper', 'scissors'];
  let cpHand = handsOpts[Math.floor(Math.random() * handsOpts.length)];

  // Set computer image accordingly
  cpPick.src = handOptions[cpHand];

  return cpHand;
};

// Randomly choose cp hand L2
const pickComputerHandL2 = () => {
  let handsOpts = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
  let cpHand = handsOpts[Math.floor(Math.random() * handsOpts.length)];

  // Set computer image accordingly
  cpPick.src = handOptions[cpHand];

  return cpHand;  
};

// Result - tie, win and lose;
const referee = (userHand, cpHand) => {

  if (userHand == cpHand) {
    setDecision("It's a tie!","none");
  }
  else if (handWins[userHand].includes(cpHand)){
    setDecision("You win this round!","your-score");
    SCORE=SCORE + 1;
    setScore(SCORE,"scoreUser");

  // Display final pop-up - You win - Limit 3 rounds
  if(SCORE==3){
      gameOverPopUp.style.display = "block";
      youWinImg.style.display = "block";
  }

  }
  else {
    setDecision("Computer wins this round","computer-score");
    SCORECP=SCORECP + 1;
    setScore(SCORECP,"scoreCP");

    //Display final pop-up - You lose - Limit 3 rounds
    if(SCORECP==3){
      gameOverPopUp.style.display = "block";
      youLoseImg.style.display = "block";
    }
  }
};

//Pop-up getting elements & necessary functions

// Get necessary Pop-up elements
//  Get the Pop-up
var gameOverPopUp = document.getElementById("gameOverPopUp");

// Get the <span> element that redirects the player home
var goHomeLink = document.getElementsByClassName("goHome")[0];

// Get Image you Lose
var youLoseImg = document.getElementById("youLoseImg");

// Get Image you Win
var youWinImg = document.getElementById("youWinImg");

//If error occurrs ignore
try {
  // go Home function
  goHomeLink.onclick = function() {
    gameOverPopUp.style.display = "none";
    window.location.href = "index.html";
  };
}
catch (e) {
  // Not in the correct page--ignore
};

// Function to restart game
const restartGame = () => {
  results.style = "results";
  hands.style="hands";
};

// Function to set the decision
const setDecision = (decision, style) => {
  document.querySelector(".score-results h1").innerText = decision;
};

// Function to set the score
const setScore = (newScore, id) => {
  document.getElementById(id).innerText = newScore;
};

// How to play window open instructions //
function level1Instructions() {
  window.open("https://www.wikihow.com/Play-Rock,-Paper,-Scissors");
}

function level2Instructions() {
  window.open("https://the-big-bang-theory.com/rock-paper-scissors-lizard-spock/");
}