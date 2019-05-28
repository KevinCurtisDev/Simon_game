//Global variables
let counter = 0;
let clickCounter = 0;
let computerChoice = [];
let playerChoice = [];
const start = document.querySelector("#start");

//audio object containing audio clips from freecodecamp sound samples
const audio = {
    audio1: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    audio2: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    audio3: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    audio4: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
}