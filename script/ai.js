class AiDecision {
  constructor() {
    this.options = ["rock", "paper", "scissors", "lizard", "spock"];
  }

  makeADecision() {
    const min = Math.ceil(0);
    const max = Math.floor(5);
    const randomAi = Math.floor(Math.random() * (max - min)) + min;
    aiChoice.setAttribute("name", this.options[randomAi]);
    aiChoice.textContent = this.options[randomAi];
  }
}

const pcOption = new AiDecision();
