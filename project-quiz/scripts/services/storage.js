const KEYS = {
  USERNAME: "username",
  QUIZ_SCORE: "quizScore",
  USER_ANSWERS: "userAnswers",
  QUESTIONS: "questions",
  QUIZ_FINISHED: "quizFinished"
};

export const StorageService = {
  getUserName: () => localStorage.getItem(KEYS.USERNAME) || "Jogador",
  
  saveQuizState: ({ score, userAnswers, questions }) => {
    localStorage.setItem(KEYS.QUIZ_SCORE, score);
    localStorage.setItem(KEYS.USER_ANSWERS, JSON.stringify(userAnswers));
    localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(questions));
    localStorage.setItem(KEYS.QUIZ_FINISHED, "true");
  },

  getQuizResult: () => ({
    userAnswers: JSON.parse(localStorage.getItem(KEYS.USER_ANSWERS)) || [],
    questions: JSON.parse(localStorage.getItem(KEYS.QUESTIONS)) || []
  }),

  clearSession: () => {
    localStorage.removeItem(KEYS.QUIZ_SCORE);
    localStorage.removeItem(KEYS.USER_ANSWERS);
    localStorage.removeItem(KEYS.QUESTIONS);
    localStorage.removeItem(KEYS.QUIZ_FINISHED);
  }
};