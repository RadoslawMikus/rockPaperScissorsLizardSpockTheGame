const clearOptions = () => {
  playerChoices.forEach((choice) => {
    choice.classList.remove("won", "draw", "lost", "active", "blocked");
    choice.classList.add("poHover");
  });
  aiChoice.classList.remove("won", "draw", "lost");
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
  timerDiv.textContent = "--:--";
  clock = 0;
  clearInterval(timerInterval);
  statusResult.textContent = "WELCOME!";
};
const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", resetGame);

const overlay = document.querySelector(".overlay");
const rulesModal = document.querySelector(".howToPlay");
const finalResult = document.querySelector(".finalResult");
const closingX = document.querySelectorAll(".closingX");
const youtubeFrame = document.querySelector(".youtubeFrame");

const clickToCloseModal = () => {
  overlay.classList.add("hide");
  rulesModal.classList.add("hide");
  finalResult.classList.add("hide");
  youtubeFrame.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/x5Q6-wMx-K8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
};

overlay.addEventListener("click", clickToCloseModal);
closingX.forEach((closX) => closX.addEventListener("click", clickToCloseModal));
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    clickToCloseModal();
  }
});

const rulesButton = document.querySelectorAll(".rules");
rulesButton.forEach((rulesButton) =>
  rulesButton.addEventListener("click", () => {
    overlay.classList.remove("hide");
    rulesModal.classList.remove("hide");
  })
);

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
  return tiktok;
};

const randomizer = (_min, _max) => {
  const min = Math.ceil(_min);
  const max = Math.floor(_max);
  return Math.floor(Math.random() * (max - min)) + min;
};

//RANDOM QUOTE
const randomQuote = (result) => {
  const wonQuotes = [
    "Not sure if you noticed, but I'm kind of a big boy!",
    "Remember to smile today!",
    "You mess with the bull, you get the horns. I'm about to show this guy just how horny I can be.",
    "WCytat4",
    "WCytat5",
  ];
  const lostQuotes = [
    "Let's just assume that everything you have done up until now is wrong...",
    "Why? Why?! Why???!!! Oh, that's why.",
    "You're wrong... But please, tell me what you think anyway.",
    "That's no reason to cry. One cries because one is sad. For example, I cry because others are stupid, and that makes me sad.",
    "LCytat5",
  ];

  if (result === "won") {
    return wonQuotes[randomizer(0, 5)];
  } else {
    return lostQuotes[randomizer(0, 5)];
  }
};

console.log(randomQuote());

const popSheldon = () => {
  const popDiv = document.querySelector(".pop");
  const whichPop = randomizer(1, 6);

  popDiv.innerHTML = `<div class="pop${whichPop} pop${whichPop}Hide"><img src="./images/pop/${whichPop}.png" /></div>`;
  const popDivChild = document.querySelector(".pop>div");

  setTimeout(() => {
    popDivChild.classList.remove(`pop${whichPop}Hide`);
    setTimeout(() => {
      popDivChild.classList.add(`pop${whichPop}Hide`);
    }, 9000);
  }, 5000);
};

setInterval(popSheldon, 20000);
