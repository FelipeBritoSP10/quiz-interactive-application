export const ResultUI = {
  elements: {
    nomeSpan: document.querySelector("header h1 span"),
    nivelSpan: document.querySelector("header h2 span"),
    resultadoSection: document.querySelector("main section"),
    botaoReiniciar: document.getElementById("btn-reiniciar"),
    ctx: document.getElementById("chart")
  },

  renderHeader(name, level) {
    this.elements.nomeSpan.textContent = name;
    this.elements.nivelSpan.textContent = level;
  },

  renderSummary(score, total) {
    this.elements.resultadoSection.innerHTML = `<h2>Você acertou ${score} de ${total} perguntas</h2>`;
  },

  renderQuestionDetails(questions, userAnswers) {
    questions.forEach((q, i) => {
      const userIdx = userAnswers[i];
      const userAnswer = userIdx !== null && userIdx !== undefined ? q.options[userIdx] : "Não respondida";
      const acertou = userAnswer === q.correct;

      const div = document.createElement("div");
      div.classList.add("questao", acertou ? "acertou" : "errou");
      div.innerHTML = `
        <h3>${q.title}</h3>
        <p>${q.text}</p>
        <p>Seu palpite: ${acertou ? "✅" : "❌"} ${userAnswer}</p>
        ${!acertou ? `<p>Resposta correta: ${q.correct}</p>` : ""}
      `;
      this.elements.resultadoSection.appendChild(div);
    });
  },

  renderChart(score, total, percentage) {
    const erros = total - score;
    new Chart(this.elements.ctx, {
      type: "doughnut",
      data: {
        labels: ["Acertos", "Erros"],
        datasets: [{
          data: [score, erros],
          backgroundColor: ["#4CAF50", "#ff0000ff"],
          hoverOffset: 4
        }]
      },
      options: {
        cutout: "50%",
        plugins: {
          legend: { position: "bottom", labels: { color: "#fff", padding: 20, boxWidth: 20 } },
          tooltip: { enabled: true }
        }
      },
      plugins: [{
        id: "centerText",
        beforeDraw: (chart) => {
          const { width, height, ctx } = chart;
          ctx.save();
          const fontSize = (height / 180).toFixed(2);
          ctx.font = `${fontSize}em sans-serif`;
          ctx.fillStyle = "#fff";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(`${Math.round(percentage)}%`, width / 2, height / 2 - 5);
          ctx.restore();
        }
      }]
    });
  }
};