class Game {}

const clearOptions = () => {
  playerChoices.forEach((choice) => {
    choice.classList.remove("won");
    choice.classList.remove("draw");
    choice.classList.remove("lost");
    choice.classList.remove("active");
  });
  aiChoice.classList.remove("won");
  aiChoice.classList.remove("draw");
  aiChoice.classList.remove("lost");
};

const resetGame = () => {
  aiPoint.textContent = 0;
  playerPoint.textContent = 0;
  playerPoints.forEach((item) => item.classList.remove("scored"));
  aiPoints.forEach((item) => item.classList.remove("scored"));
  playerChoices.forEach((item) => item.classList.remove("active"));
  clearOptions();
};
const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", resetGame);
