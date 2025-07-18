const questions = [
  { question: "What is the capital of France?", options: ["Berlin", "Paris", "Rome", "Madrid"], correct: 1 },
  { question: "Which language runs in the browser?", options: ["Java", "Python", "C", "JavaScript"], correct: 3 },
  { question: "What does CSS stand for?", options: ["Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"], correct: 1 },
  { question: "When was JavaScript created?", options: ["1995", "2005", "2015", "1985"], correct: 0 },
  { question: "Who maintains web standards?", options: ["Google", "W3C", "Mozilla", "Microsoft"], correct: 1 }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 10;
let answered = false;

// Start quiz
function startQuiz() {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.remove('hidden');
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

// Show question
function showQuestion() {
  answered = false;
  timeLeft = 10;
  updateTimer();
  timer = setInterval(countdown, 1000);

  const q = questions[currentQuestion];
  document.getElementById('question-number').innerText = `Question ${currentQuestion+1}/${questions.length}`;
  document.getElementById('question-text').innerText = q.question;

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.innerText = opt;
    btn.onclick = () => selectAnswer(idx, btn);
    optionsDiv.appendChild(btn);
  });

  document.getElementById('next-btn').disabled = true;
  updateProgress();
}

// Select answer
function selectAnswer(selected, btn) {
  if(answered) return;
  answered = true;
  clearInterval(timer);

  const q = questions[currentQuestion];
  const optionBtns = document.querySelectorAll('#options button');

  optionBtns.forEach((button, idx) => {
    if(idx === q.correct) button.classList.add('correct');
    else if(idx === selected) button.classList.add('wrong');
    button.disabled = true;
  });

  if(selected === q.correct) score++;
  document.getElementById('next-btn').disabled = false;
}

// Next question
function nextQuestion() {
  currentQuestion++;
  if(currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

// Timer countdown
function countdown() {
  timeLeft--;
  updateTimer();
  if(timeLeft <= 0) {
    clearInterval(timer);
    autoSelect();
  }
}

// Auto select wrong if time ends
function autoSelect() {
  const q = questions[currentQuestion];
  const optionBtns = document.querySelectorAll('#options button');
  optionBtns.forEach((button, idx) => {
    if(idx === q.correct) button.classList.add('correct');
    button.disabled = true;
  });
  document.getElementById('next-btn').disabled = false;
}

// Show result
function endQuiz() {
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');
  document.getElementById('score').innerText = `${score} / ${questions.length}`;

  let highScore = localStorage.getItem('highScore') || 0;
  if(score > highScore) {
    localStorage.setItem('highScore', score);
    highScore = score;
  }
  document.getElementById('high-score').innerText = `${highScore} / ${questions.length}`;
}

// Restart quiz
function restartQuiz() {
  document.getElementById('result-screen').classList.add('hidden');
  document.getElementById('start-screen').classList.remove('hidden');
}

// Progress bar
function updateProgress() {
  const percent = ((currentQuestion) / questions.length) * 100;
  document.getElementById('progress-bar').style.width = percent + '%';
}

// Timer text
function updateTimer() {
  document.getElementById('timer').innerText = `⏰ ${timeLeft}s`;
}
