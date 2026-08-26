import { StorageService } from "./services/storage.js";
import { ResultUI } from "./ui/resultUI.js";

const name = StorageService.getUserName();
const { userAnswers, questions } = StorageService.getQuizResult();

let score = 0;
userAnswers.forEach((index, i) => {
  if (index !== null && index !== undefined && questions[i] && questions[i].options[index] === questions[i].correct) {
    score++;
  }
});

const total = questions.length || 1;
const percentage = (score / total) * 100;

function calculateLevel(p) {
  if (p === 100) return "Excelente 💪";
  if (p >= 70) return "Muito bom 🚀";
  if (p >= 40) return "Regular 🧠";
  return "Precisa melhorar 📚";
}

ResultUI.renderHeader(name, calculateLevel(percentage));
ResultUI.renderSummary(score, total);
ResultUI.renderChart(score, total, percentage);
ResultUI.renderQuestionDetails(questions, userAnswers);

ResultUI.elements.botaoReiniciar.addEventListener("click", () => {
  StorageService.clearSession();
  window.location.href = "./quiz.html";
});