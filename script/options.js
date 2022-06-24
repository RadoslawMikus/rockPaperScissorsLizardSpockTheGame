"use strict";
const playerChoices = document.querySelectorAll(".playerOption");
const playerPoints = document.querySelectorAll(".playerPoints span");
const playerPoint = document.querySelector(".centerResult span:first-of-type");
const aiChoice = document.querySelector(".aiOption");
const aiPoints = document.querySelectorAll(".aiPoints span");
const aiPoint = document.querySelector(".centerResult span:last-of-type");

class Option {
  constructor(rock, paper, scissors, lizard, spock) {
    this.rock = rock;
    this.paper = paper;
    this.scissors = scissors;
    this.lizard = lizard;
    this.spock = spock;
  }

  haveYouWon(aiChoice, plChoice) {
    this.aiChoice = this[aiChoice];
    clearOptions();
    if (this.aiChoice) {
      playerPoints[parseInt(playerPoint.textContent)].classList.add("scored");
      playerPoint.textContent = parseInt(playerPoint.textContent) + 1;
      document.querySelector(".aiOption").classList.add("lost");
      document.getElementsByName(plChoice)[0].classList.add("won");
      console.log("You won!");
    } else if (this.aiChoice === null) {
      document.querySelector(".aiOption").classList.add("draw");
      document.getElementsByName(plChoice)[0].classList.add("draw");
      console.log("Draw!");
    } else {
      aiPoints[parseInt(aiPoint.textContent)].classList.add("scored");
      aiPoint.textContent = parseInt(aiPoint.textContent) + 1;
      document.querySelector(".aiOption").classList.add("won");
      document.getElementsByName(plChoice)[0].classList.add("lost");
      console.log("You lost!");
    }
    setTimeout(function () {
      if (playerPoint.textContent === "5") {
        console.log("Wygrałeś!");
        resetGame();
      } else if (aiPoint.textContent === "5") {
        console.log("Przegrałeś!");
        resetGame();
      } else {
        clearOptions();
      }
    }, 2000);
  }
}

const rock = new Option(null, false, true, true, false);
const paper = new Option(true, null, false, false, true);
const scissors = new Option(false, true, null, true, false);
const lizard = new Option(false, true, false, null, true);
const spock = new Option(true, false, true, false, null);

const playerChoice = function () {
  playerChoices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
      // RESET ACTIVES
      playerChoices.forEach((choice) => {
        choice.classList.remove("active");
      });
      // ADD ACTIVE
      choice.classList.add("active");
    });
  });
};

const playGame = () => {
  const startButton = document.querySelector(".start");
  startButton.addEventListener("click", () => {
    console.log(document.querySelector(".active").getAttribute("name"));
    console.log(aiChoice.getAttribute("name"));
    if (document.querySelector(".active")) {
      console.log(pcOption.makeADecision());
      const daChoice = document.querySelector(".active").getAttribute("name");
      console.log(
        eval(daChoice).haveYouWon(aiChoice.getAttribute("name"), daChoice)
      );
    } else {
      console.log("Wybierz coś");
    }
  });
};

playerChoice();
playGame();
