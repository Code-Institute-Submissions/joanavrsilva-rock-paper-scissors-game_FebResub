<h1 align ="center">The Ultimate Rock Paper Scissors Game</h1>

## [View the life project here](https://marcin-kli.github.io/MP1/)

This Rock Paper Scissors Game is a different way to play the traditional rock paper scissors game. This game has two different versions: the Classic and The Big Bang Theory. The Classic version corresponds to the traditional game of rock paper scissors with three possible choices: the rock hand, the paper hand and the scissors hand. The Big Bang Theory version is inspired in the version presented in the series, which consists in five hypotheses: the rock hand, the paper hand, the scissors hand, the spock hand and the lizard hand.
In this game the user chooses a hand and the computer randomly generates another hand. The user and the computer score is available during the game. After three scores the game is over.
Finally, instructions on how to play the game are available.

![Screenshot (220)](https://user-images.githubusercontent.com/83631970/134315591-511c8173-1b36-484f-9fe6-0bd732948062.png)

---
# Table of contents

- [User Stories (UX)](#ux)
    - [User stories](#user-stories)
        - [First Time Visitor Goals](#frist-time-visitor-goals)
        - [Returning Visitor Goals](#returning-visitor-goals)
        - [Frequent User Goals](#frequent-user-goals)
    - [Structure of the website](#structure-of-the-website)
    - [Wireframes](#wireframes)
    - [Design](#design)
- [Features](#features)
- [Technology](#technology)
- [Testing](#testing)
    - [Functionality testing](#functionality-testing)
    - [Compatibility testing](#compatibility-testing)
    - [Code Validation](#code-validation)s
    - [Issues found during site development](#issues-found-during-site-development)
    - [Performance testing](#performance-testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Screenshots](#screenshots)
___

# User Experience (UX)

## User stories
* First Time Visitor Goals
    * As a First Time Visitor, I want to understand the site main purpose.
    * As a First Time Visitor, I want to be able to easily navigate throughout the site.
  
* Returning Visitor Goals
    * As a First Time Visitor, I want a appealing website structure.
    * As a First Time Visitor, I want to have a good experience. 

* Frequent User Goals
    * As a Frequent Visitor, I want to have a good time playing the game.
    * As a Frequent Visitor, I want to have the possibility of having social links to follow the website changes/updates. 


## Structure of the website

The website is designed to be simple, captivating and user-friendly in differents devices. For that, were used captivating colors, hoover buttons effects and a simple way to play the game in differents versions.


## Wireframes

I used website wireframe.cc to create a wireframe.

![Wireframes](md_images/wireframes.png)


## Design

### Colour Scheme
* #2b2e53 - dark blue
* white;
* rgb(254,208,0); - yellow
* rgb(177, 38, 63);- red
* hsl(229, 25%, 31%);-blue

### Fonts
* Roboto, sans-serif;

### Favicon

### Iterative buttons

### Pop-up messages

### Images

* I used images from [ClipartMax](https://www.clipartmax.com);
* All the images are credited in the [Credits](#credits) section.

[Back to Table of contents](#table-of-contents)
___


# Features
This Rock Paper Scissors Game is a different way to play the traditional rock paper scissors game. This game has two different versions: the Classic and The Big Bang Theory. The Classic version corresponds to the traditional game of rock paper scissors with three possible choices: the rock hand, the paper hand and the scissors hand. The Big Bang Theory version is inspired in the version presented in the series, which consists in five hypotheses: the rock hand, the paper hand, the scissors hand, the spock hand and the lizard hand.
In this game the user chooses a hand and the computer randomly generates another hand. The user and the computer score is available during the game. After three scores the game is over.
Finally, instructions on how to play the game are available.

The website consists of four pages: Home, Instrucions, Classic(Level 1) and The Big Bang Theory(Level 2). Two pages are accessible from a navigation menu in the top of the right side: Home and Instructions. The other two pages, the Classic version and The Big Bang Theory game are acessible from the button Classic and from the button The Big Bang Theory in the homepage, correspondingly. When the game is finish a pop-up message appears with a button to Play Again the same level and another button to Exit. When click the Exit button is click, returns to the homepage(Home).


## Navigation bar 
* On the right side there are two links: Home and Instructions.
* The navigation bar is visible on the top of each page.
* It's responsive and adapt to the differentes devices


## Footer
* The Footer is consistent on all pages. 
* It has social links on the center and each link open in a separate tab in a browser.


## Home
The Home(page) contains:
* A navigation menu on the right side with acess to Home and Instructions pages;
* A title;
* Two versions game play buttons: Classic and The Big Bang Theory;

![Screenshot (220)](https://user-images.githubusercontent.com/83631970/134315591-511c8173-1b36-484f-9fe6-0bd732948062.png).


## Instructions
* The Instructions page contains a explication for how to play the Classic version and The Big Bang Theory version;
* This pages contains links to see the combinations for win, lose and tie;
![Screenshot (222)](https://user-images.githubusercontent.com/83631970/134316090-760d94d1-c5d9-4524-9daa-5a6ce1a5d163.png).


## Classic
* The Classic version page contains the Classic game;
* This page contains a navigation menu, a score area and a game area;
* In the game area the user needs to choose one of three interatives hands (paper, scissor, rock), the computer choose the other randomly;
* The score area count the user and the computer wins choices;
* After three scores, a pop-up message appears, the user can choose Play again the same level or choose the Exit button and return to the homepage;
* The homepage also contains a button call Classic that leads to this page;
![Screenshot (224)](https://user-images.githubusercontent.com/83631970/134316351-562102a9-0564-436f-ac90-0d44ee1edfb9.png).


## The Big Bang Theory
* The The Big Bang Theory page contains the The Big Bang Theory version game;
* This page contains a navigation menu, a score area and a game area;
* In the game area the user needs to choose one of the five interatives hands (paper, scissor, rock, lizard, spock), the computer choose the other randomly;
* The score area count the user and the computer wins choices;
* After three scores, a pop-up message appears, the user can choose Play again the same level or choose the Exit button and return to the homepage;
* The home page also contains a button call The Big Bang Theorythat leads to this page;
* This game level has based on the Big Bang Theory series game version;
![Screenshot (226)](https://user-images.githubusercontent.com/83631970/134316463-f2f49673-19ff-4403-8ba6-dd8f046a41ea.png).

[Back to Table of contents](#table-of-contents)
___


# Tecnologies Used
HTML5 
* Structure language
Balsamiq
* Wireframe tool
CSS
* Style language
Favicon.io
* Favicon generator
Font Awesome
* Social links icons
Git
* Version control sytem tracking
GitHub
* Software hosting platform
Gitpod
* Development hosting platform
Google fonts
* Font resource
Javascript
* Object-oriented computer programming language used to create interactive effects.

[Back to Table of contents](#table-of-contents)
___



# Testing


## Functionality testing 

 I use the Chrome developers tools throughout the project to improve responsiveness and style, like the [Viewport Resizer](https://chrome.google.com/webstore/detail/viewport-resizer-%E2%80%93-respon/kapnjjcfcncngkadhpmijlkblpibdcgm) extension.


## Compatibility testing
 I tested the site in differents virtual mobile devices and browsers, in Mozilla web developer tolls and in Chrome developer tools. 


## Performance testing
* Lighthouse performace
![Screenshot (230)](https://user-images.githubusercontent.com/83631970/134317193-326296b4-2e18-4d2e-ba13-39fbbf907c02.png)


## Issues found during site development


## Code Validation
* CSS
    * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - All errors have been fixed.
* HTML
    * [Nu Html Checker](https://validator.w3.org/) - All errors have been fixed.
* Javascript
    * [Jshint](https://https://jshint.com/.com/)

[Back to Table of contents](#table-of-contents)
___


# Deployment

* The project was deployed on GitHub Pages.

The steps to deploy are as follows:
* In the GitHub repository, I navigate to the Settings tab;
* From the source section drop-down menu, I select the Main Branch;
* Once the master branch has been selected, the page refreshed with a detailed ribbon display to indicate the successful deployment;
* The site is published at (https://joanavrsilva.github.io/rock-paper-scissors-game).

[Back to Table of contents](#table-of-contents)
___


# Credits
* Code
    * I used the Code Institute student template (https://github.com/Code-Institute-Org/gitpod-full-template);
    * Clever Programmer inspiration - Build a Rock Paper Scissors Game with JavaScript, HTML, & CSS;
    * W3school;
    * Buttons - Codepen.io styles inspiration.
* Images
    * Clipartmax.
* Favicon
    * Favicon generator - https://favicon.io/favicon-converter/.
* Level 2
    * The Big Bang Theory game of Rock, Paper, Scissors, Lizard and Spock.

[Back to Table of contents](#table-of-contents)
___


# Screenshots

## Project screenshots

[Back to Table of contents](#table-of-contents)
___
