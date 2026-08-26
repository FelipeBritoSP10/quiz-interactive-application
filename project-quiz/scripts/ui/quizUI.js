export const QuizUI = {
  elements: {
    saudacao: document.getElementById("saudacao"),
    title: document.getElementById("question-title"),
    text: document.getElementById("question-text"),
    answersContainer: document.getElementById("answers"),
    confirmBtn: document.getElementById("confirm"),
    counter: document.getElementById("question-counter"),
    timeEl: document.getElementById("time")
  },

  setGreeting(name) {
    this.elements.saudacao.textContent = name ? `Boa sorte, ${name}! 🚀` : "Bem-vindo ao Quiz!";
  },

  renderQuestion(question, currentIndex, totalQuestions, onSelectOption) {
    this.elements.title.textContent = question.title;
    this.elements.text.textContent = question.text;
    this.elements.counter.textContent = `Questão ${currentIndex + 1} de ${totalQuestions} - Desenv. Web`;
    this.elements.answersContainer.innerHTML = "";
    this.elements.confirmBtn.disabled = true;

    question.options.forEach((option, index) => {
      const btn = document.createElement("button");
      btn.classList.add("answer");
      btn.textContent = option;
      btn.addEventListener("click", () => {
        document.querySelectorAll(".answer").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        this.elements.confirmBtn.disabled = false;
        onSelectOption(index);
      });
      this.elements.answersContainer.appendChild(btn);
    });
  },

  highlightAnswers(selectedIndex, correctIndex) {
    document.querySelectorAll(".answer").forEach((b, i) => {
      b.disabled = true;
      if (i === selectedIndex && i === correctIndex) b.classList.add("correct");
      else if (i === selectedIndex) b.classList.add("wrong");
      else if (i === correctIndex) b.classList.add("correct");
    });
  },

  updateTimer(time) {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    this.elements.timeEl.textContent = `${minutes}:${seconds}`;
  }
};