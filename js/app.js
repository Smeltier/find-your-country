(function () {
const { categoryInfo, questions } = window.quizData;
const { countries } = window.countryData;

const STORAGE_KEY = "find-your-country-quiz";
const TOTAL_QUESTIONS = 30;
const CATEGORIES = Object.keys(categoryInfo);
const state = loadState();

const elements = {
  start: document.querySelector("#start-screen"),
  quiz: document.querySelector("#quiz-screen"),
  result: document.querySelector("#result-screen"),
  startButton: document.querySelector("#start-button"),
  backButton: document.querySelector("#back-button"),
  exitButton: document.querySelector("#exit-button"),
  restartButton: document.querySelector("#restart-button"),
  progressText: document.querySelector("#progress-text"),
  progressPercent: document.querySelector("#progress-percent"),
  progressBar: document.querySelector("#progress-bar"),
  progressTrack: document.querySelector(".progress-track"),
  categoryBadge: document.querySelector("#category-badge"),
  categoryDescription: document.querySelector("#category-description"),
  questionNumber: document.querySelector("#question-number"),
  questionTitle: document.querySelector("#question-title"),
  answerOptions: document.querySelector("#answer-options"),
  questionCard: document.querySelector("#question-card"),
  bestCountry: document.querySelector("#best-country"),
  description: document.querySelector("#country-description"),
  strengths: document.querySelector("#strengths-list"),
  attention: document.querySelector("#attention-list"),
  cities: document.querySelector("#cities-list"),
  alternatives: document.querySelector("#alternatives-list")
};

function loadState() {
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { screen: "start", questions: [], answers: [], current: 0 };
  } catch (error) {
    console.error("Não foi possível restaurar o progresso salvo.", error);
    return { screen: "start", questions: [], answers: [], current: 0 };
  }
}

function saveState() {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function createQuestionSet() {
  const selected = CATEGORIES.flatMap((category) => shuffle(questions.filter((question) => question.category === category)).slice(0, 4));
  return shuffle(selected);
}

function showScreen(screen) {
  elements.start.classList.toggle("is-hidden", screen !== "start");
  elements.quiz.classList.toggle("is-hidden", screen !== "quiz");
  elements.result.classList.toggle("is-hidden", screen !== "result");
}

function beginQuiz() {
  state.questions = createQuestionSet();
  state.answers = [];
  state.current = 0;
  state.screen = "quiz";
  saveState();
  showScreen("quiz");
  renderQuestion();
}

window.startQuiz = beginQuiz;

function renderQuestion() {
  const question = state.questions[state.current];
  if (!question) return showResults();
  const info = categoryInfo[question.category];
  const currentAnswer = state.answers[state.current];
  elements.progressText.textContent = `${state.current + 1} de ${TOTAL_QUESTIONS}`;
  elements.progressPercent.textContent = `${Math.round(((state.current + 1) / TOTAL_QUESTIONS) * 100)}%`;
  elements.progressBar.style.width = `${((state.current + 1) / TOTAL_QUESTIONS) * 100}%`;
  elements.progressTrack.setAttribute("aria-valuenow", String(state.current + 1));
  elements.categoryBadge.textContent = info.label;
  elements.categoryDescription.textContent = info.description;
  elements.questionNumber.textContent = `Pergunta ${state.current + 1}`;
  elements.questionTitle.textContent = question.text;
  elements.backButton.disabled = state.current === 0;
  elements.answerOptions.replaceChildren();
  [1, 2, 3, 4, 5].forEach((value) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.innerHTML = `<span class="answer-number">${value}</span><span class="answer-label">${["Nada", "Pouco", "Neutro", "Gosto", "Muito"][value - 1]}</span>`;
    if (currentAnswer === value) button.setAttribute("aria-pressed", "true");
    button.addEventListener("click", () => answerQuestion(value));
    elements.answerOptions.append(button);
  });
  elements.questionCard.style.animation = "none";
  requestAnimationFrame(() => { elements.questionCard.style.animation = ""; });
}

function answerQuestion(value) {
  state.answers[state.current] = value;
  saveState();
  if (state.current === TOTAL_QUESTIONS - 1) {
    showResults();
    return;
  }
  state.current += 1;
  saveState();
  renderQuestion();
}

function goBack() {
  if (state.current === 0) return;
  state.current -= 1;
  saveState();
  renderQuestion();
}

function calculateScore(country) {
  let weightedScore = 0;
  let maximumScore = 0;
  state.questions.forEach((question, index) => {
    const answer = state.answers[index] || 1;
    const weight = answer === 1 ? 0.1 : answer;
    weightedScore += weight * (country.traits[question.trait] || 3);
    maximumScore += weight * 5;
  });
  return Math.round((weightedScore / maximumScore) * 100);
}

function listItem(text) {
  const item = document.createElement("li");
  item.textContent = text;
  return item;
}

function showResults() {
  const ranked = countries.map((country) => ({ country, score: calculateScore(country) })).sort((a, b) => b.score - a.score);
  const [winner, ...alternatives] = ranked;
  const country = winner.country;
  elements.bestCountry.innerHTML = `<div class="country-heading"><span class="country-flag" aria-hidden="true">${country.flag}</span><h2 class="country-name">${country.name}</h2></div><div class="compatibility">${winner.score}%</div><span class="compatibility-label">de compatibilidade com suas respostas</span>`;
  elements.description.textContent = country.description;
  elements.strengths.replaceChildren(...country.strengths.map(listItem));
  elements.attention.replaceChildren(...country.attention.map(listItem));
  elements.cities.replaceChildren(...country.cities.map((city) => {
    const chip = document.createElement("span");
    chip.className = "city-chip";
    chip.textContent = city;
    return chip;
  }));
  elements.alternatives.replaceChildren(...alternatives.slice(0, 3).map(({ country: option, score }) => {
    const row = document.createElement("div");
    row.className = "alternative-row";
    row.innerHTML = `<span class="alternative-flag" aria-hidden="true">${option.flag}</span><span class="alternative-name">${option.name}</span><span class="alternative-score">${score}%</span>`;
    return row;
  }));
  state.screen = "result";
  saveState();
  showScreen("result");
}

function exitQuiz() {
  state.screen = "start";
  saveState();
  showScreen("start");
}

elements.backButton.addEventListener("click", goBack);
elements.exitButton.addEventListener("click", exitQuiz);
elements.restartButton.addEventListener("click", beginQuiz);

if (state.screen === "quiz" && state.questions.length === TOTAL_QUESTIONS) {
  showScreen("quiz");
  renderQuestion();
} else if (state.screen === "result" && state.questions.length === TOTAL_QUESTIONS && state.answers.length === TOTAL_QUESTIONS) {
  showResults();
} else {
  state.screen = "start";
  saveState();
  showScreen("start");
}
})();
