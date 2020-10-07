// HTML Elements
var timerEl = document.getElementById("timer");
var headerEl = document.getElementById("header");
var instructionCardEl = document.getElementById("instructions");
var completedCardEl = document.getElementById("completed-card");
var highscoreCardEl = document.getElementById("highscore-card");
var submitEl = document.getElementById("submit-high-score");
var viewHighscoreEl = document.getElementById("view-highscore");
var returnEl = document.getElementById("return-btn");
var initialsEl = document.getElementById("initials-input")

// global variables
var timer;
var secondsLeft;
var finalScore
var highScoreArr = [];
var initials;


function Question(quest, answer, correctAns) {
  this.quest = quest;
  this.answer = answer;
  this.correctAns = correctAns;
};

// Quiz Questions
var question01 = new Question(
  "What is the capital of Washington?",
  ["Seattle", "Tacoma", "Olympia", "Everett"],
  "Olympia"
);

var question02 = new Question(
  "What is the capital of Oregon?",
  ["Portland", "Salem", "Eugene", "Medford"],
  "Salem"
);

var question03 = new Question(
  "What is the capital of California?",
  ["Sacramento", "San Jose", "San Francisco", "Los Angeles"],
  "Sacramento"
);

var question04 = new Question(
  "what is the capital of Massachusetts?",
  ["Spring Field", "Manchester", "Providence", "Boston"],
  "Boston"
);

// quiz Q's array
var qArr = [question01, question02, question03, question04];


// Instructions Card / Begin Quiz
function displayInstruction() {
  instructionCardEl.classList.remove("display-none");
  completedCardEl.classList.add("display-none");
  highscoreCardEl.classList.add("display-none");
  headerEl.classList.remove("display-none");
  rmvQuizCardEl();

};

// Quiz Questions
function displayQuiz() {
  instructionCardEl.classList.add("display-none");
  completedCardEl.classList.add("display-none");
  highscoreCardEl.classList.add("display-none");
  headerEl.classList.remove("display-none");
};

// Quiz Complete
function quizCompleted() {
  headerEl.classList.remove("display-none");
  instructionCardEl.classList.add("display-none");
  completedCardEl.classList.remove("display-none");
  highscoreCardEl.classList.add("display-none");
};

// Highscores
function displayHighscore() {
  headerEl.classList.add("display-none");
  instructionCardEl.classList.add("display-none");
  completedCardEl.classList.add("display-none");
  highscoreCardEl.classList.remove("display-none");
};

function addElement() {
  var questionCardEl = document.createElement("div");
  questionCardEl.innerHTML = `<div class="card text-left col-12 col-sm-10 col-md-9 col-lg-6" id = "quiz-card"><div><h2 class="card-title" id="question">Question will go here.</h2><ul><li><button class="btn" id="ans1">A: Answer 1</button></li><li><button class="btn" id="ans2">B: Answer 2</button></li><li><button class="btn" id="ans3">C: Answer 3</button></li><li><button class="btn" id="ans4">D: Answer 4</button></li></ul><div><p><span id="correct-or-not"></span></p></div></div></div>`
  document.body.appendChild(questionCardEl);
};

function askQuestion(question) {
  addElement();

  document.getElementById("question").textContent = question.ask;
  for (var i = 0; i < question.answers.length; i++) {
    document.getElementById("ans" + (i + 1)).textContent = question.answers[i];
  }
  checkCorrect(question);
}

// check answer
function checkCorrect(question) {
  var quizCardEl = document.getElementById("quiz-card");
  var displayCorrEl = document.getElementById("correct-or-not");

  // Quiz Card
  quizCardEl.addEventListener("click", function (event) {
    event.preventDefault();
    // if correct answer
    if (event.target.textContent === question.correctAns) {
      displayCorrEl.innerHTML = "Correct!";
      // if true >> next Q
      nextQuestion(question);
    } else {
      displayCorrEl.innerHTML = "Wrong!";
      // if WRONG
      if ((secondsLeft - 5) < 5) {
        secondsLeft = 1;
      } else {
        secondsLeft = secondsLeft - 5;
      }
    }
  };

// event litsener to start quiz 
document.getElementById("start-btn").addEventListener("click", function(event) {
  event.preventDefault();
  displayQuiz();
  startTimer();
  askQuestion(question01);
});


// calls initialze function to start program
init();