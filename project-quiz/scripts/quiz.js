import { questions } from "../data/questions.js";
import { StorageService } from "./services/storage.js";
import { QuizUI } from "./ui/quizUI.js";

let currentQuestion = 0;
let selectedAnswer = null;
let score = 0;
let timer = null;
const userAnswers = [];

QuizUI.setGreeting(StorageService.getUserName());

function startTimer() {
  let time = 120;
  clearInterval(timer);
  QuizUI.updateTimer(time);

  timer = setInterval(() => {
    time--;
    QuizUI.updateTimer(time);

    if (time < 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function loadCurrentQuestion() {
  startTimer();
  selectedAnswer = null;
  const q = questions[currentQuestion];
  
  QuizUI.renderQuestion(q, currentQuestion, questions.length, (index) => {
    selectedAnswer = index;
  });
}

function finishQuiz() {
  StorageService.saveQuizState({ score, userAnswers, questions });
  window.location.href = "./result.html";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadCurrentQuestion();
  } else {
    finishQuiz();
  }
}

QuizUI.elements.confirmBtn.addEventListener("click", () => {
  if (selectedAnswer === null) return;

  const q = questions[currentQuestion];
  const correctIndex = q.options.indexOf(q.correct);
  userAnswers[currentQuestion] = selectedAnswer;

  if (selectedAnswer === correctIndex) score++;
  QuizUI.highlightAnswers(selectedAnswer, correctIndex);

  setTimeout(() => {
    clearInterval(timer);
    nextQuestion();
  }, 600);
});

loadCurrentQuestion();