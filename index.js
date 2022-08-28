const RPS = ["rock", "paper", "scissors"];

const [rock, paper, scissors] = [
  document.querySelector("#rock"),
  document.querySelector("#paper"),
  document.querySelector("#scissors"),
];

//Select every element that has the class "choice-box" in it,
// and create an Array with all those elements
const choiceBoxes = document.querySelectorAll(".choice-box");

//Same with "score" divs
const scores = document.querySelectorAll(".score");

const start = document.querySelector("#start");
const matchConfirmation = document.querySelector("#matchConfirmation");

let computer = {
  name: "Computer",
  currentChoice: "",
  score: 0,
};
let player = {
  name: "Player",
  currentChoice: "",
  score: 0,
};

function score() {
  //Don't execute this function unless one of the player have already won the game
  if (player.score < 4 && computer.score < 4) return;

  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
  matchConfirmation.style.color = "white";
  matchConfirmation.style.backgroundColor = "black";

  let winner = player.score >= 3 ? "Player" : "Computer"; //

  matchConfirmation.textContent = `${winner} Won, Click on Restart to play again`;
}

const choices = ["rock", "paper", "scissors"];

function computerSelection() {
  computerChoice = Math.floor(Math.random() * RPS.length);
  computer.currentChoice = choices[computerChoice];
}

function compareResult() {
  //Before doing anything, compare if both choices are the same.
  if (player.currentChoice === computer.currentChoice) {
    //If they are, return and no one wins
    return (matchConfirmation.textContent = "It's a tie!");
  }

  let winner, loser; //Variables that will receive the winner's and loser's Objects

  //Get the winner
  if (
    (player.currentChoice === "stone" && computer.currentChoice !== "paper") ||
    (player.currentChoice === "paper" && computer.currentChoice !== "scissors") ||
    (player.currentChoice === "scissors" && computer.currentChoice !== "stone")
  ) {
    //Block if the player won
    player.score++;
    winner = player;
    loser = computer;
  } else {
    //Block if computer won
    computer.score++;
    winner = computer;
    loser = player;
  }

  //Sets the score element of the winner
  scores.forEach((score) => {
    const {id} = score;
    if(id !== winner.name.toLowerCase()) return;
    score.textContent = winner.score;
  })

  matchConfirmation.textContent = `${winner.name} won because ${winner.currentChoice} beats ${loser.currentChoice}`;

  score();
}

function game() {
  start.addEventListener("click", () => {
    alert("Select Rock, Paper or Scrissors to start");
  });

  choiceBoxes.forEach((choiceBox) => {
    choiceBox.addEventListener("click", (e) => {
      const { id } = e.target; //Get the value of that button by it's id
      //EXAMPLE: If the button ID is "rock", then that button corresponds to the rock button

      player.currentChoice = id; //Set the player currentChoice to the value of that button
      computerSelection();
      compareResult();
    });
  });
}

game();
