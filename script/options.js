"use strict";
let timerInterval;
const playerChoices = document.querySelectorAll(".playerOption");
const playerPoints = document.querySelectorAll(".playerPoints span");
const playerPoint = document.querySelector(".centerResult span:first-of-type");
const aiChoice = document.querySelector(".aiOption");
const aiPoints = document.querySelectorAll(".aiPoints span");
const aiPoint = document.querySelector(".centerResult span:last-of-type");
const statusResult = document.querySelector(".status");
const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");
const finalResultHeader = document.querySelector(".finalResult h1");
const finalResultModal = document.querySelector(".finalResultRight");
const randomQuoteDiv = document.querySelector(".randomQuote");

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
    startButton.removeEventListener("click", checkIfWon);
    playerChoices.forEach((choice) => {
      choice.classList.remove("poHover");
      choice.classList.add("blocked");
    });
    document.querySelector(".howFast").textContent = timer();
    if (this.aiChoice) {
      playerPoints[parseInt(playerPoint.textContent)].classList.add("scored");
      playerPoint.textContent = parseInt(playerPoint.textContent) + 1;
      document.querySelector(".aiOption").classList.add("lost");
      document.getElementsByName(plChoice)[0].classList.add("won");
      statusResult.textContent = "You won!";
    } else if (this.aiChoice === null) {
      document.querySelector(".aiOption").classList.add("draw");
      document.getElementsByName(plChoice)[0].classList.add("draw");
      statusResult.textContent = "It's a tie!";
    } else {
      aiPoints[parseInt(aiPoint.textContent)].classList.add("scored");
      aiPoint.textContent = parseInt(aiPoint.textContent) + 1;
      document.querySelector(".aiOption").classList.add("won");
      document.getElementsByName(plChoice)[0].classList.add("lost");
      statusResult.textContent = "You lost!";
    }

    if (playerPoint.textContent === "5") {
      finalResultModal.classList.add("won" + randomizer(1, 3));
      randomQuoteDiv.textContent = randomQuote("won");
      finalResult.classList.remove("hide");
      overlay.classList.remove("hide");
      finalResultHeader.textContent = "You f'ckin won! Hell yeah!";
      startButton.addEventListener("click", checkIfWon);
      clearInterval(timerInterval);
    } else if (aiPoint.textContent === "5") {
      finalResultModal.classList.add("lost" + randomizer(1, 3));
      randomQuoteDiv.textContent = randomQuote("lost");
      finalResult.classList.remove("hide");
      overlay.classList.remove("hide");
      finalResultHeader.textContent = "Ha ha! You lose!";
      startButton.addEventListener("click", checkIfWon);
      clearInterval(timerInterval);
    } else {
      setTimeout(function () {
        clearOptions();
        clearAi();
        startButton.addEventListener("click", checkIfWon);
        playerChoices.forEach((choice) => {
          choice.classList.add("poHover");
          choice.classList.remove("blocked");
        });
      }, 3000);
    }
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
      if (
        parseInt(aiPoint.textContent) === 0 &&
        parseInt(playerPoint.textContent) === 0 &&
        clock === 0
      ) {
        timerInterval = setInterval(timer, 1000);
      }
      // ADD ACTIVE
      if (!choice.classList.contains("blocked")) {
        choice.classList.add("active");
      }
    });
  });
};

const checkIfWon = () => {
  if (document.querySelector(".active")) {
    pcOption.makeADecision();
    const daChoice = document.querySelector(".active").getAttribute("name");
    eval(daChoice).haveYouWon(aiChoice.getAttribute("name"), daChoice);
  } else {
    console.log("Wybierz coś");
  }
};

resetButton.addEventListener("click", () => {
  resetGame();
  clickToCloseModal();
});

const playGame = () => {
  startButton.addEventListener("click", checkIfWon);
};

playerChoice();
playGame();
