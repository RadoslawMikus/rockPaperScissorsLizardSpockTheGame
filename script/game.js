const resetGame = () => {
  playerChoices.forEach((choice) => {
    choice.classList.remove("won");
    choice.classList.remove("lost");
  });
};
