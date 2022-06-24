const options = ["rock", "paper", "scissors", "lizard", "spock"];
class AiDecision {
  constructor(options) {
    this.options = options;
  }

  makeADecision() {
    const min = Math.ceil(0);
    const max = Math.floor(5);
    const randomAi = Math.floor(Math.random() * (max - min)) + min;
    aiChoice.setAttribute("name", this.options[randomAi]);
    // aiChoice.textContent = this.options[randomAi];
    aiChoice.classList.add(this.options[randomAi]);
  }
}

const pcOption = new AiDecision(options);
