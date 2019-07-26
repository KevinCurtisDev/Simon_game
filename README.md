# Simon Game

![Simon game image](https://github.com/The-masta-blasta/Simon_game/blob/master/assets/images/simonImg.png)

- [Simon Game](#simon-game)
  * [Project summary](#Project-summary)
  * [UX](#ux)
    + [User stories:](#user-stories-)
      - [Child:](#child-)
      - [Gamer:](#gamer-)
      - [Nostalgic 80's lover of all things retro:](#nostalgic-80-s-lover-of-all-things-retro-)
    + [Features](#features)
  * [Technologies Used](#technologies-used)
  * [Testing](#testing)
  * [Deployment](#deployment)
    + [Live deployment](#live-deployment)
    + [Local version](#local-version)
  * [Difficulties](#difficulties)
  * [Further Enhancements](#further-enhancements)
  * [Credits](#credits)
  * [Media](#media)
  * [Acknowledgements](#acknowledgements)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Project summary

This project, the second of the code institute bootcamp projects, is a memory game based on the classic 1978 released electronic Simon Game, where the game plays a sequence of lights and sounds and the player has to repeeate the sequence. Each time the player repeats the sequence correctly he/she moves onto the next level, which becomes increasingly more difficult as the sequence gets longer.

I took a simple approach to building this project, keeping it as close to the original game as possible while adapting the layout and interactive features to modern devices.

## UX

The Simon Game is primarily aimed at people looking to challenge their short term memory capacity, kids trying to beat their and their friend's high score, adults who want to relive the nastalgia of the 70's and 80's. My design choice was inspired by the simplicity of the original game, and as such, I have kept the UI as basic as possible, while trying my best not to take away from usability.

While planning the the design of the game, an important consideration was layout for various devices and screen size, making sure to use white space strategically on large screens and being careful not to clutter smaller screen sizes with UI elements.

You can see the wireframes at the following link: [Wire Frames](https://github.com/KevinCurtisDev/Simon_game/blob/master/assets/wirefames)

The following questions were asked:

* Who will use this game/web app?
* What is the user's goal(s)?
* What functionality/features should be included/excluded?
* How does this project address the above questions?


### User stories:


The following user stories were used in building the game -

#### Child:

As a child, I want to see the high score and start playing the game as quickly as possible, while checking my current score against the high score I'm trying to beat.

Actions:
* Go to game url
* Select difficulty level
* Click start
* Watch and repeat pattern

As a child, I want to reset the game and play again.

Actions:
* Click the reset button
* Click the start button
* Watch and repeat pattern

#### Gamer:

As a Gamer, I want to play a new game.

Actions: 
* Go to game url
* Select difficulty level
* Click start
* Watch and repeat pattern

As a Gamer, I want to restart the game.

Actions: 
* Click the reset button

As a Gamer, I want to play select a new difficulty level and play again.

Actions: 
* Click the difficulty button to toggle the level of difficulty
* Click the reset button
* CLick the start button



View wireframes: [wireframes]() 


### Features

* Local storage: The game takes advantage of local storage in order to persist the latest high score value.

* Visuals and sound effects: In order to provide feedback to the user, the game implements audio and visual cues to indicate when the user has pressed a button, and to indicate whether they have succeeded or failed in repeating the pattern.

* Display: The game displays the user's current lives as heart images, the high score, and the player's current score/level.

* Game settings: The user has the option to set a game level to hard or easy with a toggle button. The user can also start or reset a game using the start/reset button. The start/reset button is initially in the start state and once a game begins it sitches to the reset state.




## Technologies Used


HTML5 – Semantic html was used throughout the site, with a strong emphasis placed on accessibility (using aria and best practices).


Post CSS – Post CSS was used in order to make the css more organised and manageable. Flexbox was implemented to achieve the sites responsive design.


Javascript (es2015) – javascript was used to implement the game logic and interactive features including sounds, visuals and dynamic feedback of lives, level, high score and difficulty setting.


Gulp was used as the project task runner, to compress, organise and compile the final distribution of the web app.


## Testing

### Manual testing

Manual testing was carried out on the game with every code change. Areas tested were user interface, display, responsive design, browser caching and over all user experience.

#### Display

* Initial screen display: Should show a modal with game instructions and a button to go to the game.
  Tested on multiple screen sizes. All displays were as expected. Clicking the go to game button closed the modal as expected.

* Initial game screen display (mobile): Should display lives(x3), high score(score), game settings buttons and current level/score at the top of the screen, and the rest of the screen should display the game buttons stacked one upon each other. 

* Initial game screen display (large screens): Should display title(Simon Game) lives(x3), and high score(score) at the top of the screen. The game buttons should be displayed in a square pattern in the center of the screen with a control/settings panel in the middle, displaying , game settings buttons and current level/score.

* High score: should remain at the current number value until the player achieves a higher score, at which point the high score will increment on each succesful round. High score number behaved as expected.

* Current score: Should initially be set to 0. Should increment by one with each successful round. Score behaved as expected.

* Game over: When the player loses all three lives, the game will end with a screen overlay message saying game over and giving the player an option to play again by clicking a play again button. The game will be reset. Game over functionality behaved as expected.

#### UI

* Clicking the start button: Should initialise a new game, indicated by all buttons lighting up and the current score setting to 0. It should then select a random game button and trigger its associated sound and light up effect. It should also toggle the start button to an orange reset button. Button behaved as expected.

* Clicking the reset button: Should reset the current game and lives, indicated by all buttons lighting up and the current score setting to 0. It should also toggle the reset button to the original green start button state. Button behaved as expected.

* Clicking individual 'light' buttons: Should make the clicked button light up momentarily while playing an associated sound. Following this the computer should play a repeated sequence which is incremented by one on each successive turn. CLicking the wrong button in the pattern will reset the pattern and score to zero (on difficult level) - the score will not be reset when playing level is set to easy - and the pattern will be shown again. One life (heart) will be subtracted. Buttons behaved as expected.



## Deployment

### Live deployment

This site has been deployed on GitHub pages and can be viewed here: [live preview of project](https://kevincurtisdev.github.io/Simon_game/) 

### Local version

To run the Simon game on your local machine you should do the following:

* Navigate to the github repo here: [repo](https://github.com/KevinCurtisDev/Simon_game)
* Click the download button at the top right of the screen.
* Alternatively navigate into a folder (using the command line) you wish to clone the game to on your machine and run the following git command: git clone https://github.com/KevinCurtisDev/Simon_game
* once you have the repo on your machine, from the command line cd into the project folder
* make sure you have python3 installed on your machine and run th efollowing command: python3 -m http.server
* To see the game visit the local host address generated by the python server.

## Difficulties

The two areas I strigled the most with on this project were:
* 1: Designing for multiple devices and deciding on the appropriate design choice for best user experience. 

* 2: Figuring out the logic that compared the player's moves to the computer's moves as the game progressed.


## Further Enhancements

I believe this project would benefit mostly by implementing some form of data persistence such as a service worker in order to keep track of the high score. Going a step further, if the application was connected to a data base, a leader board could be stored for multiple user od the game on different devices.


## Code Sample

```JavaScript

const clickButton = num => {
    //push the button to the player's choice array
    playerChoice.push(num);
    //trigger the click event on the button
    buttonTrigger(num);
    //check if the player's sequence matches the computer's sequence
    checkIfMatch();
}

green.addEventListener("click", () => clickButton(1));

red.addEventListener("click", () => clickButton(2));

yellow.addEventListener("click", () => clickButton(3));

blue.addEventListener("click", () => clickButton(4));

//select a random button ID from 1 to 4 and push it to the computerChoice array
const computerSelect = () => {
    let choice = Math.floor(Math.random() * 4 + 1);
    computerChoice.push(choice);
}

//trigger a button to play an associated sound and to lighten in color momentarily
const buttonTrigger = choice => {
    document.getElementById(choice).classList.add("opacity");
    //audio clips from freecodecamp sound samples
    const track = new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound${choice}.mp3`);
    track.play();

    setTimeout(() => {
        document.getElementById(choice).classList.remove("opacity");
    }, 200);
}

```


## Credits

All code and design choice were of my own creation inspired by the original simon game.


## Media


Sound files used for the buttons were sourced from [https://s3.amazonaws.com/freecodecamp/](https://s3.amazonaws.com/freecodecamp/)