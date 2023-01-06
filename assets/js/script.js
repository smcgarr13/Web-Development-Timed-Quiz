
// Set-up global variables
var startButton = document.querySelector("#quiz-button")
var startDiv = document.querySelector("#start-div")
var questionDiv = document.querySelector("#question-div")
var questionEl = document.querySelector("#question")
var buttonA = document.querySelector("#choiceA")
var buttonB = document.querySelector("#choiceB")
var buttonC = document.querySelector("#choiceC")
var buttonD = document.querySelector("#choiceD")
// var answerCheck = document.querySelector("#answerCheck")
// var scoreDiv = document.querySelector("#scoreContainer")

var interval;
var questionCounter = 0;

var choices = ['buttonA', 'buttonB', 'buttonC', 'buttonD'];

var end = document.querySelector("#end")
var scoreContainer = document.querySelector("#scoreContainer")
var highScores = document.querySelector("#highScores")
// var initials = document.querySelector("#userScore")
var userScore = document.querySelector("#userScore")
var initials = document.querySelector("#initials")
var finalUserScore = document.querySelector("#finalScore")

// is this right???
// var highScores = document.querySelector("#Initials-Score") 
// or would it be
// var initials = document.querySelector("#initials") 
var score = 0;

var goBackButton = document.querySelector("#goBack")
var clearHighScoresButton = document.querySelector("#clearHighScores")
var submitButton = document.querySelector("#submit")
var finalScore = "";

var timeEl = document.querySelector('.js-timeout')
var timer = timeEl.innerHTML;
var minutes = timer[0];
var seconds = 30;

var scoreList = document.querySelector("#scoreList")


// Questions
let questions = [
    {
        question: "Commonly used data types Do Not Include: ",
        choices: ["A. strings", "B. booleans", "C. alerts", "D. numbers"],
        answer: "B. booleans" //if a sentence would have to be exactly the same as what's noted in choices
        // choices: ["a", "b", "c", "d"],
        // answer: "a" //if a sentence would have to be exactly the same as what's noted in choices]
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
      if (minutes == 0 && seconds == 0) clearInterval(interval);
  }, 1000);
}

// Answer Button Functions (for questions)
function startQuiz(){
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

function nextQuestion(event){
  
    console.log(event.target.textContent == questions[questionCounter].answer)
    if(event.target.textContent !== questions[questionCounter].answer) {
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

// Check Answers
// referenced: https://codereview.stackexchange.com/questions/119804/answer-checking-script
// referenced: https://www.youtube.com/watch?v=49pYIMygIcU



// Game Over function
function gameOver() {
    end.classList.remove("hidden");
    questionDiv.classList.add("hidden");
    clearInterval(interval);
    finalUserScore.textContent = score;
    // if (submitButton.event + "click") {
    //     highScores();
    // }
}

// High Score
// function saveScore(event){
//     var data = {
//         initials: initials,
//         score: score
//     }
//     highScores.push(data)
//     localStorage.setItem("highScores", JSON.stringify(highScores))
// } 

// var highScores = []





function highScores(){
    if (submitButton.event)
    // console.log("Button Works!!")
    // countdown() 
    end.classList.add("hidden");
    scoreContainer.classList.remove("hidden");
}

// function highScores() {
//     scoreContainer.classList.remove("hidden");
    // end.classList.add("hidden");
    // questionDiv.classList.add("hidden");
// };

// Initials and score saved to local storage
// referenced: 22-Stu_Local-Storage Lesson/Code
// function renderLastRegistered() {
// var initials = localStorage.getItem("initials");
// var lastScore = localStorage.getItem("score");
// userEmailSpan.textContent = lastEmail;
// userPasswordSpan.textContent = lastScore;
// }

// submitButton.addEventListener("click", function(event) {
//   event.preventDefault();

//   var initials = document.querySelector("#initials").value;
// //   var finalScore = document.querySelector("#finalScore").value;

//   if (initials === "") {
//     displayMessage("error", "Initials cannot be blank");
// //   } else if (password === "") {
// //     displayMessage("error", "Password cannot be blank");
//   } else {
//     displayMessage("success", "Registered successfully");

//   // Save initials and final score to localStorage and render the last registered user
//   localStorage.setItem("initials", initials);
//   localStorage.setItem("finalScore", finalScore);renderLastRegistered()
//   }
// });


// Event Listener
// var clearScores = "";

startButton.addEventListener("click", startQuiz)
buttonA.addEventListener("click", nextQuestion)
buttonB.addEventListener("click", nextQuestion)
buttonC.addEventListener("click", nextQuestion)
buttonD.addEventListener("click", nextQuestion)

// goBackButton.addEventListener("click", startQuiz)
// clearHighScoresButton.addEventListener("click", clearScores)
submitButton.addEventListener("click", saveScore)

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


