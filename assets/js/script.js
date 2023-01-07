
// Set-up global variables
var startButton = document.querySelector("#quiz-button")
var startDiv = document.querySelector("#start-div")
var questionDiv = document.querySelector("#question-div")
var questionEl = document.querySelector("#question")
var buttonA = document.querySelector("#choiceA")
var buttonB = document.querySelector("#choiceB")
var buttonC = document.querySelector("#choiceC")
var buttonD = document.querySelector("#choiceD")

var questionCounter = 0;
var choices = ['buttonA', 'buttonB', 'buttonC', 'buttonD'];

var end = document.querySelector("#end")
var scoreContainer = document.querySelector("#scoreContainer")
var highScores = document.querySelector("#highScores")
var userScore = document.querySelector("#userScore")
var initials = document.querySelector("#initials")
var finalUserScore = document.querySelector("#finalScore")
var score = 0;

var goBackButton = document.querySelector("#goBack")
var clearHighScoresButton = document.querySelector("#clearHighScores")
var submitButton = document.querySelector("#submit")
var finalScore = "";

var timeEl = document.querySelector('.js-timeout')
var timer = timeEl.innerHTML;
var minutes = timer[0];
var seconds = 30;
var interval;

var scoreList = document.querySelector("#scoreList")


// Questions
let questions = [
    {
        question: "Commonly used data types Do Not Include: ",
        choices: ["A. strings", "B. booleans", "C. alerts", "D. numbers"],
        answer: "C. alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with ________.",
        choices: ["A. quotes", "B. curly brackets", "C. parenthesis", "D. square brackets"],
        answer: "C. parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        choices: ["A. numbers and strings", "B. other arrays", "C. booleans", "D. all of the above"],
        answer: "D. all of the above"
    },
    {
        question: "String values must be enclosed within  ________ when being assigned variables.",
        choices: ["A. commas", "B. curly brackets", "C. quotes", "D. parenthesis"],
        answer: "C. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["A. JavaScript", "B. terminal/bash", "C. for loops", "D. console.log"],
        answer: "C. for loops"
    }
];

// Timer
// referenced: https://codepen.io/TLJens/pen/azedap

function countdown() {
    clearInterval(interval);
    interval = setInterval( function() {
    // var timeEl = document.querySelector('.js-timeout')
    console.log(seconds)
    timer = timeEl.innerHTML;
      timer = timer.split(':');
      minutes = timer[0];
    //   seconds = timer[1];
      seconds -= 1;
      score = seconds + 60;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
          minutes -= 1;
          seconds = 59;
          score = seconds;
      }
      else if (seconds < 10 && length.seconds != 2) {
        seconds = '0' + seconds;
        score = seconds;
      } 
    timeEl.innerHTML = (minutes + ':' + seconds);
      if (minutes == 0 && seconds == 0) gameOver();
  }, 1000);
}
  
// Answer Button Functions (for questions)
function startQuiz() {
    console.log("Button Works!!")
    countdown() 
    startDiv.classList.add("hidden");
    questionDiv.classList.remove("hidden");
    questionEl.textContent = questions[questionCounter].question
    buttonA.textContent = questions[questionCounter].choices[0]
    buttonB.textContent = questions[questionCounter].choices[1]
    buttonC.textContent = questions[questionCounter].choices[2]
    buttonD.textContent = questions[questionCounter].choices[3]
}
// referenced: https://www.youtube.com/watch?v=_LYxkClHnV0&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=6

function nextQuestion(event) {
  
    console.log(event.target.textContent == questions[questionCounter].answer)
    if (event.target.textContent !== questions[questionCounter].answer) {
        seconds -= 10;
    }
     
    questionCounter++;
    if (questionCounter == questions.length) {
        gameOver();
        return
    }
   
    questionEl.textContent = questions[questionCounter].question
    buttonA.textContent = questions[questionCounter].choices[0]
    buttonB.textContent = questions[questionCounter].choices[1]
    buttonC.textContent = questions[questionCounter].choices[2]
    buttonD.textContent = questions[questionCounter].choices[3]
}

// Game Over function
function gameOver() {
    end.classList.remove("hidden");
    questionDiv.classList.add("hidden");
    clearInterval(interval);
    finalUserScore.textContent = score;
}

// High Scores
function highScores() {
    if (submitButton.event)
    // console.log("Button Works!!")
        end.classList.add("hidden");
        scoreContainer.classList.remove("hidden");
    }

function saveScore() {
    console.log(score)
    console.log(initials)
var data = {
    initials:initials.value,
    score:score
} 

userScore.push(data)
localStorage.setItem("userScore", JSON.stringify(userScore))
scoreContainer.classList.remove("hidden");
end.classList.add("hidden");
questionDiv.classList.add("hidden");

for (let i = 0; i < userScore.length; i++) {
    var li = document.createElement("li") 
    li.textContent = userScore[i].initials + ": " + userScore[i].score
    scoreList.appendChild(li)
    }
}

var userScore = JSON.parse(localStorage.getItem("userScore"))||[]

// Event Listeners
startButton.addEventListener("click", startQuiz)
buttonA.addEventListener("click", nextQuestion)
buttonB.addEventListener("click", nextQuestion)
buttonC.addEventListener("click", nextQuestion)
buttonD.addEventListener("click", nextQuestion)
submitButton.addEventListener("click", saveScore)





