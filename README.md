# Simon Game

![Simon game image](https://github.com/The-masta-blasta/Simon_game/blob/master/assets/images/simonImg.png)


This project, the second of the code institute bootcamp projects, is a memory game based on the classic 1978 released electronic Simon Game, where the game plays a sequence of lights and sounds and the player has to repeeate the sequence. Each time the player repeats the sequence correctly he/she moves onto the next level, which becomes increasingly more difficult as the sequence gets longer.

I took a simple approach to building this project, keeping it as close to the original game as possible while adapting the layout and interactive features to modern devices.


- [Simon Game](#simon-game)
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


## UX

The Simon Game is primarily aimed at people looking to challenge their short term memory capacity, kids trying to beat their and their friend's high score, adults who want to relive the nastalgia of the 70's and 80's. My design choice was inspired by the simplicity of the original game, and as such, I have kept the UI as basic as possible, while trying my best not to take away from usability.

While planning the the design of the game, nd important consideration was layout for various devices and screen size, making sure to use white space strategically on large screens and being careful not to clutter smaller screen sizes with UI elements.

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


#### Gamer:

As a Gamer, I want to..

Actions: 

#### Nostalgic 80's lover of all things retro:



Action: 


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


Responsive design: responsive design was tested on google chrome webdeveloper tools. Once the site was uploaded to github pages it was also tested on a number of phones, tablets, laptop and desktop screens.


Browser compatibility: The site was run on multiple browsers, including chrome, chrome canary, firefox, IE, opera.


Progressive: The site was run through google chrome's lighthouse audit and scored full marks in all areas including, progressive, accessibility, SEO, performance.


Offline capability: Tested on an iphone 5s, iphone 8, sony xperia, samsung 8, and multiple desktops, laptops and tablets. Any page visited while online remained available offline when the site was reloaded.


Native app experience: Tested on iphone 5s, iphone 8, sony xperia, samsung 8. The site downloaded with an app icon to each homescreen. The app launched with a splash screen displaying the app icon at the appropriate size. Once launched, the site displayed in the full size of the view window without the usual upper and lower browser bars. The top bar on each android device also changed to the colour theme set, this feature didn't work for iphone models.


## Deployment

### Live deployment

This site has been deployed on GitHub pages and can be viewed here: [live preview of project]() 

### Local version

To run the Simon game on your local machine you should do the following:

* Navigate to the github repo here: [repo](https://github.com/The-masta-blasta/Simon_game)
* Click the download button at the top right of the screen.
* Alternatively navigate into a folder (using the command line) you wish to clone the game to on your machine and run the following git command: git clone https://github.com/The-masta-blasta/Simon_game
* once you have the repo on your machine, from the command line cd into the project folder
* make sure you have python3 installed on your machine and run th efollowing command: python3 -m http.server
* To see the game visit the local host address generated by the python server.

## Difficulties


## Further Enhancements


## Credits

All content was supplied by Jessica Traynor


## Media


Sound files used for the buttons were sourced from [https://s3.amazonaws.com/freecodecamp/](https://s3.amazonaws.com/freecodecamp/)


## Acknowledgements

