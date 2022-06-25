const clearOptions = () => {
  playerChoices.forEach((choice) => {
    choice.classList.remove("won");
    choice.classList.remove("draw");
    choice.classList.remove("lost");
    choice.classList.remove("active");
    choice.classList.remove("blocked");
    choice.classList.add("poHover");
  });
  aiChoice.classList.remove("won");
  aiChoice.classList.remove("draw");
  aiChoice.classList.remove("lost");
};

const clearAi = () => {
  options.forEach((opt) => aiChoice.classList.remove(opt));
  aiChoice.removeAttribute("name");
};

const resetGame = () => {
  aiPoint.textContent = 0;
  playerPoint.textContent = 0;
  playerPoints.forEach((item) => item.classList.remove("scored"));
  aiPoints.forEach((item) => item.classList.remove("scored"));
  playerChoices.forEach((item) => item.classList.remove("active"));
  clearOptions();
  clearAi();
};
const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", resetGame);

const overlay = document.querySelector(".overlay");
const rulesModal = document.querySelector(".howToPlay");
const finalResult = document.querySelector(".finalResult");
const closingX = document.querySelector(".closingX");
const youtubeFrame = document.querySelector(".youtubeFrame");

const clickToCloseModal = () => {
  overlay.classList.add("hide");
  rulesModal.classList.add("hide");
  finalResult.classList.add("hide");
  youtubeFrame.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/x5Q6-wMx-K8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
};

overlay.addEventListener("click", clickToCloseModal);
closingX.addEventListener("click", clickToCloseModal);
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    clickToCloseModal();
  }
});

const rulesButton = document.querySelector(".rules");
rulesButton.addEventListener("click", () => {
  overlay.classList.remove("hide");
  rulesModal.classList.remove("hide");
});

let clock = 0;
const timerDiv = document.querySelector(".timer");

const timer = () => {
  let hours = Math.floor(clock / 3600);
  let minutes = Math.floor(clock / 60) - hours * 60;
  let seconds = clock - hours * 3600 - minutes * 60;
  let tiktok =
    (clock >= 3600 ? `${hours < 10 ? "0" + hours : hours}h ` : "") +
    (clock >= 60 ? `${minutes < 10 ? "0" + minutes : minutes}m ` : "") +
    `${seconds < 10 ? "0" + seconds : seconds}s`;
  timerDiv.textContent = tiktok;
  clock++;
};
