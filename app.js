//Global variables
let counter = 0;
let clickCounter = 0;
let computerChoice = [];
let playerChoice = [];
const buttonNodeList = document.querySelectorAll(".quarter");
const start = document.getElementById("start");
const strictBtn = document.getElementById("strict");
const green = document.getElementById("1");
const red = document.getElementById("2");
const yellow = document.getElementById("3");
const blue = document.getElementById("4");

const mode = {
    strict: false,
}

strictBtn.addEventListener("click", () => {
    if (mode.strict) {
        mode.strict = false;
        strictBtn.style.backgroundColor = "red";
    } else {
        mode.strict = true;
        strictBtn.style.backgroundColor = "green";
    }
    console.log(mode.strict);
});

// //turn on/off pointer events for the game buttons
// const pointerEvents = () => {
//     buttonNodeList.forEach(btn => {
//         btn.style.pointerEvents ? btn.style.pointerEvents = "none" 
//         : btn.style.pointerEvents = "auto";
//     });
// }

const clickButton = num => {
    //push the button to the player's choice array
    playerChoice.push(num);
    //trigger the click event on the button
    buttonTrigger(num);
    //check if the player's sequence matches the computer's sequence
    checkIfMatch();
}

green.addEventListener("click", () => { clickButton(1) });

red.addEventListener("click", () => { clickButton(2) });

yellow.addEventListener("click", () => { clickButton(3) });

blue.addEventListener("click", () => { clickButton(4) });

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

//reset player and computer moves, then initiate a new computer move to start the game
start.addEventListener('click', () => {
    //reset counter to 0
    counter = 0;
    //empty player's choice array
    playerChoice = [];
    //empty computer's choice array
    computerChoice = [];
    //initiate computer choice sequence
    computerSelect();
    buttonTrigger(computerChoice[0]);
});

//Show computer's moves so far after player has finished their sequence
const showMoves = () => {
    playerChoice = [];
    let i = 0;
    let moves = setInterval(() => {
        buttonTrigger(computerChoice[i]);
        i++;
        if (i >= counter + 1) {
            clearInterval(moves);
        }
    }, 700)
}

//Compare player's moves array with the computer's moves array
const checkIfMatch = () => {
    if (playerChoice[playerChoice.length - 1] !== computerChoice[playerChoice.length - 1] && mode.strict === true) {
        //game over and reset game if the user makes a mistake when repeating the patern
        alert("game Over!");
        counter = 0;
        document.querySelector("#turn-counter").innerHTML = counter;
    } else if (playerChoice.length === computerChoice.length) {
        //otherwise the computer selects a new move and the game continues
        computerSelect();
        showMoves();
        counter++;
        document.querySelector("#turn-counter").innerHTML = counter;
    }
}