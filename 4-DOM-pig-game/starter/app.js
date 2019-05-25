/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//variable decleration

let scores, roundScores, activePlayer, isActive, maxScore, winningScore;
let lastDice;

//call initialise function on page load

init();

//page load intialise function

function init() {
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector("#score-0").textContent = "0";
  document.querySelector("#score-1").textContent = "0";
  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";
  document.querySelector(".dice").style.display = "none";
  scores = [0, 0];
  activePlayer = 0;
  roundScores = 0;
  winningScore = 20;
  maxScore = document.querySelector("#maxScore");
  isActive = true;
}

maxScore.addEventListener("change", function() {
  winningScore = maxScore.value;
});

//Roll Dice Button Click

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isActive) {
    let dice = Math.floor(Math.random() * 6 + 1);

    document.querySelector(".dice").src = "images/dice-" + dice + ".png";

    if (lastDice === 6 && dice === 6) {
      scores[activePlayer] = 0;
      document.querySelector("#score-" + activePlayer).textContent = 0;
      lastDice = 0;
      nextPlayer();
    } else if(dice !== 1) {
      document.querySelector(".dice").style.display = "block";
      roundScores += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScores;
    } else { 
      nextPlayer();
    }
    lastDice = dice;
    console.log(lastDice);
  }
});

// hold score functionality

document.querySelector(".btn-hold").addEventListener("click", function() {
  scores[activePlayer] += roundScores;
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= winningScore) {
    isActive = false;
    document.querySelector("#name-" + activePlayer).textContent = "WINNER!";
    document.querySelector(".dice").style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
  } else {
    nextPlayer();
  }
});

// new game button

document.querySelector(".btn-new").addEventListener("click", init);

function nextPlayer() {
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("active");
  roundScores = 0;
  document.querySelector("#current-" + activePlayer).textContent = 0;
  document.querySelector(".dice").style.display = "none";

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("active");
}

function swopSix(){
  
}