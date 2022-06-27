const options = ["rock", "paper", "scissors", "lizard", "spock"];
class AiDecision {
  constructor(options) {
    this.options = options;
  }

  makeADecision() {
    const randomAi = randomizer(0, 5);
    aiChoice.setAttribute("name", this.options[randomAi]);
    aiChoice.classList.add(this.options[randomAi]);
  }
}

const pcOption = new AiDecision(options);
