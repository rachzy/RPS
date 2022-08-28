const RPS = ['rock', 'paper', 'scissors'];

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let start = document.getElementById("start");
let computer;
let player;
let computerScore;
let playerScore;

/*function computerSelection() {
    const array = new Uint16Array(1);
    let computer;
    self.crypto.getRandomValues(array);
    for (const num of array) {
        console.log(num);
        if (num > 0 && num < 50 || num > 150 && num < 200) {
            computer = "rock";
            console.log(computer);
        } else if (num > 50 && num < 150 || num > 200 && num < 250) {
            computer = "paper";
            console.log(computer);
        } else if (num > 0 && num < 50 || num > 250 && num < 300) {
            computer = "scissors";
            console.log(computer);
        }
    }
};*/

function computerSelection() {
    computer = Math.floor(Math.random() * RPS.length);
    if (computer === 0) {
        computer = "rock";
        console.log(computer);
    } else if (computer === 1) {
        computer = "paper";
        console.log(computer);
    } else if (computer === 2) {
        computer = "scissors";
        console.log(computer);
    }
    return computer;
};

function playerSelection() {
    function demo1() {
        player = "rock";
        console.log(player);
        computerSelection();
        compareResult();
    }
    function demo2() {
        player = "paper";
        console.log(player);
        computerSelection();
        compareResult();
    }
    function demo3() {
        player = "scissors";
        console.log(player);
        computerSelection();
        compareResult();
    }

    if(rock.addEventListener("click", demo1)) {
    } else if(paper.addEventListener("click", demo2)) {
    } else if(scissors.addEventListener("click", demo3)) {
    }
};

function compareResult() {
    if(player === "") {   
    } else if (player === RPS[0] && computer === RPS[2]) {
        console.log(`Player won because ${player} beats ${computer}`);
        playerScore++;
    } else if (player === RPS[1] && computer === RPS[0]) {
        console.log(`Player won because ${player} beats ${computer}`);
        playerScore++;
    } else if (player === RPS[2] && computer === RPS[1]) {
        console.log(`Player won because ${player} beats ${computer}`);
        playerScore++;
    } else if (player === computer) {
        console.log(`Tie because ${player} = ${computer}`);
    } else {
        console.log(`Computer won because ${computer} beats ${player}`);
        computerScore++;
    }
};

function score() {
    if(playerScore >= 3) {
        delete rock;
        delete paper;
        delete scissors;
        console.log("Player Won, Click on Restart")
    } else if (computerScore >= 3) {
        delete rock;
        delete paper;
        delete scissors;
        console.log("Computer Won, Click on Restart")
    }
};

function game() {
    //playerSelection();
    //compareResult();
    function demo4() {
        alert("Select Rock, Paper or Scrissors to start");
        playerSelection();
    }
    if(start.addEventListener("click", demo4)) {
    }
};

game();