// Play and score functions

// Images
const handOptions = {
    'rock': "assets/images/hand-rock.png",
    'paper': "assets/images/hand-paper.png",
    'scissors': "assets/images/hand-scissors.png",
    'spock': "assets/images/hand-spock.png",
    'lizard': "assets/images/lizard.png",
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
let score = 0;
let scoreComputer = 0;

// Get hands options
var hands = document.getElementById("hands");

//get result section elements
var results = document.getElementById("results");
var userChoice = document.getElementById("userChoiceImage");
var computerChoice = document.getElementById("computerChoiceImage");

