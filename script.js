
// Start Quiz
function startQuiz(){
    document.querySelector('.timer-display').style.display = 'inline';
}

// Quiz Timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " Until Quiz Starts";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

// Quiz Questions
var quizQuestions = [
    {"Question": `What is the capital of Washington?`,
    "Option01": `Seattle`,
    "Option02": `Tacoma`,
    "Option03": `Olympia`,
    "Option04": `Everett`,
    "Answer": `Option03`},

    {"Question": `What is the capital of Oregon?`,
    "Option01": `Portland`,
    "Option02": `Salem`,
    "Option03": `Eugene`,
    "Option04": `Medford`,
    "Answer": `Option02`},

    {"Question": `What is the capital of California?`,
    "Option01": `Sacramento`,
    "Option02": `San Jose`,
    "Option03": `San Francisco`,
    "Option04": `Los Angeles`,
    "Answer": `Option01`},

    {"Question": `What is the capital of Massachusetts?`,
    "Option01": `Spring Field`,
    "Option02": `Manchester`,
    "Option03": `Providence`,
    "Option04": `Boston`,
    "Answer": `Option04`},

]