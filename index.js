const RPS = ['rock', 'paper', 'scissors'];

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let start = document.getElementById("start");
let computer;
let player;
let computerScore = 0;
let playerScore = 0;

function score() {
    if (playerScore >= 2) {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("matchConfirmation").style.color = "white";
        document.getElementById("matchConfirmation").style.backgroundColor = "black";
        document.getElementById("matchConfirmation").innerText = "Player Won, Click on Restart to play again";
    } else if (computerScore >= 2) {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("matchConfirmation").style.color = "white";
        document.getElementById("matchConfirmation").style.backgroundColor = "black";
        document.getElementById("matchConfirmation").innerText = "Computer Won, Click on Restart to play again";
    }
};

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
    score();
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
        document.getElementById("matchConfirmation").innerText =`Player won because ${player} beats ${computer}`;
        playerScore++;
        document.getElementById("pScore").innerText = playerScore;
    } else if (player === RPS[1] && computer === RPS[0]) {
        document.getElementById("matchConfirmation").innerText =`Player won because ${player} beats ${computer}`;
        playerScore++;
        document.getElementById("pScore").innerText = playerScore;
    } else if (player === RPS[2] && computer === RPS[1]) {
        document.getElementById("matchConfirmation").innerText =`Player won because ${player} beats ${computer}`;
        playerScore++;
        document.getElementById("pScore").innerText = playerScore;
    } else if (player === computer) {
        document.getElementById("matchConfirmation").innerText = `Tie because ${player} = ${computer}`;
    } else {
        document.getElementById("matchConfirmation").innerText = `Computer won because ${computer} beats ${player}`;
        computerScore++;
        document.getElementById("cScore").innerText = computerScore;
    }
    return playerScore, computerScore;
};

function game() {
    function demo4() {
        alert("Select Rock, Paper or Scrissors to start");
        playerSelection();
        //score();
    }
    if(start.addEventListener("click", demo4)) {
    }
};

game();