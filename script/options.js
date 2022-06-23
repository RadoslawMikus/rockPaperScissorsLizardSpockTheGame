"use strict";
class Option {
  constructor(rock, paper, scissors, lizard, spock) {
    this.rock = rock;
    this.paper = paper;
    this.scissors = scissors;
    this.lizard = lizard;
    this.spock = spock;
  }

  haveYouWon(aiChoice) {
    this.aiChoice = this[aiChoice];
    if (this.aiChoice === true) {
      return "You won!";
    } else if (this.aiChoice === null) {
      return "Draw!";
    } else {
      return "You lost!";
    }
  }
}

const rock = new Option(null, false, true, true, false);
const paper = new Option(true, null, false, false, true);
const scissors = new Option(false, true, null, true, false);
const lizard = new Option(false, true, false, null, true);
const spock = new Option(true, false, true, false, null);

const playerChoice = function () {
  const playerChoices = document.querySelectorAll(".playerOption");
  const aiChoice = document.querySelector(".aiOption");

  playerChoices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
      // RESET ACTIVES
      playerChoices.forEach((choice) => {
        choice.classList.remove("active");
      });
      // ADD ACTIVE
      choice.classList.add("active");
      const daChoice = eval(e.target.textContent);
      console.log(daChoice.haveYouWon(aiChoice.textContent));
    });
  });
};

playerChoice();
