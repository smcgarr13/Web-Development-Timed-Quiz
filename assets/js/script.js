
// Set-up global variables
var startButton = document.querySelector("#quiz-button")
var startDiv = document.querySelector("#start-div")
var questionDiv = document.querySelector("#question-div")
var questionEl = document.querySelector("#question")
var buttonA = document.querySelector("#choiceA")
var buttonB = document.querySelector("#choiceB")
var buttonC = document.querySelector("#choiceC")
var buttonD = document.querySelector("#choiceD")
var answerCheck = document.querySelector("#answerCheck")
var scoreDiv = document.querySelector("#scoreContainer")

var interval;
var questionCounter = 0;

var choices = ['buttonA', 'buttonB', 'buttonC', 'buttonD'];

var end = document.querySelector("#end")
var scoreContainer = document.querySelector("#scoreContainer")
var highScores = document.querySelector("#highScores")

// is this right???
var highScores = document.querySelector("#Initials-Score") 
// or would it be
var initials = document.querySelector("#initials") 
var score = 0;

var goBackButton = document.querySelector("#goBack")
var clearHighScoresButton = document.querySelector("#clearHighScores")
var submitButton = document.querySelector("#submit")
var finalScore = "";

var timeEl = document.querySelector('.js-timeout')
var timer = timeEl.innerHTML;
var minutes = timer[0];
var seconds = timer[1];

// Declare the "score" variable
// referenced: https://stackoverflow.com/questions/54506852/how-to-calculate-a-percentage-score-for-a-quiz-in-javascript

// var answer = "";
// let acceptingAnswers = false

// Questions
let questions = [
    {
        question: "Commonly used data types Do Not Include: ",
        choices: ["A. strings", "B. booleans", "C. alerts", "D. numbers"],
        answer: "C. alerts" //if a sentence would have to be exactly the same as what's noted in choices
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
    timer = timeEl.innerHTML;
      timer = timer.split(':');
      minutes = timer[0];
      seconds = timer[1];
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
const maxQuestions = questions.length;
// const selectedChoice = [];
// const userAnswer = ("click", choices);
// const Correct = userAnswer.dataset.correctAnswer

// const selectedAnswer = selectedChoice.dataset["number"];

function nextQuestion(event){
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
    console.log(event.target.textContent == questions[questionCounter].answer)
    if(event.target.textContent !== questions[questionCounter].answer) {
        seconds -= 10;
     }
}
// if (userAnswer.correct) {
//     choices.dataset.correct = userAnswer.correct
//     }

// Check Answers
// referenced: https://codereview.stackexchange.com/questions/119804/answer-checking-script
// referenced: https://www.youtube.com/watch?v=49pYIMygIcU
// function checkAnswer(correctAnswer) {

// var userAnswer = "";

// function checkAnswer () {
//     if (userAnswer == answer){
//         // correct
//         alert ("correct, hooray!!")
//         score++; 
//     }else{
//         // incorrect
//         // deduct 10 secs from timer 
//         alert ("incorrect, bummer!!")
//         (timeEl) - 10;
//         // end quiz & share score
//         clearInterval;
//         scoreRender();
//     }
// }

// function checkAnswer (answer) {
//     if (answer === questions[runningQuestion].correctAnswer){
//         // correct
//         score++; 
//     }else{
//         // incorrect
//         // deduct 10 secs from timer 
//     // }else{
//     //     // end quiz & share score
//     //     clearInterval;
//     //     scoreRender();
//     }
// }


//     // var lineBreak = document.getElementById("lineBreak");
//     // lineBreak.style.display = "block";
//     // answerCheck.style.display = "block";

//     if (questions.userAnswer === questions.choices[correctAnswer]) {
//         // correct answer, add 1 score to final score
//         correctAnswer++;
//         // console.log(correctAns);
//         answerCheck.textContent = "Correct!";
//     } else {
//         // wrong answer, deduct 10 second from timer
//         totalTime -= 10;
//         timeEl.textContent = totalTime;
//         answerCheck.textContent = "Wrong! The correct answer is: " + questions.correctAnswer;
//     }

//     questionIndex++;
//     // repeat with the rest of questions 
//     if (questionIndex < questions.length) {
//         nextQuestion();
//     } else {
//         // if no more question, run game over function
//         gameOver();
//     }
// }

// function compareAnswer(event) {
//     if (userAnswer >= questions.length) {
//         clearInterval;
//     } else {
//     if (event === questions.answer) {
//         feedback1.textContent = "Correct!";
//     } else {
//         timeEl -= 10;
//         feedback1.textContent = "ooooo, you missed that one...Bummer!";
//     }
//     score = timeEl;
//     questions();
//     }
// }

// var userAnswer = "";

// function checkAnswer (correctAnswer) {
// if (userAnswer === correctAnswer) {
//     console.log("Correct!")
// }
// if (userAnswer !== correctAnswer){
//     console.log("ooooo, you missed that one...Bummer!")
    
//     }
// }

// const loadquestion = () => {
//     //console.log('working!!!')
//     //GETTING THE CORRECT ANSWER //
//     answer = (questions[questionCounter].answer)
//     console.log(correctAnswer)
//     //RESET CLICK WHEN CLICKED OUTSIDE
//     const clickreset = (e) => {
//       if (e.target !== quizbox) {
//         // console.log(answer1.checked)
//         choices0.checked = false
//         choices1.checked = false
//         choices2.checked = false
//         choices3.checked = false
//       } else {}
//     }
// }

// let lastQuestionIndex = questions.length - 1;
// let runningQuestionIndex = 0;

// function renderQuestion() {
//     let q = questions[runningQuestionIndex];
//     question.innerHTML = "<h1>" + q.question + "<h1>";
//     choiceA.innerHTML = q.choiceA;
//     choiceB.innerHTML = q.choiceB;
//     choiceC.innerHTML = q.choiceC;
//     choiceD.innerHTML = q.choiceD;
// }

// function checkAnswer(answer) {
//     if (questions(answer, correctAnswer)) {
//         alert("Correct!");
//     } else {
//         alert("Bummer!");
//   }
// };

// function checkAnswers(correctAnswers) {

//     //You could also just use a standard for-loop for this
//     correctAnswers.forEach(function(correctAnswer, i) {
//         //Note unless you check prevent i from being appended when i == 1,
//         // your first answer ID will be "answer1" instead of "answer"
//         var answer = document.getElementById("answer" + (i + 1)).value;

//         if (answerIsCorrect(answer, correctAnswer)) {
//             alert("Correct!");

//         } else {
//             alert("Bummer!");
//         }
//     });
// }

// Game Over function
function gameOver() {
    end.classList.remove("hidden");
    questionDiv.classList.add("hidden");
    clearInterval(interval)
}

// High Score

function highScores() {
    scoreDiv.classList.remove("hidden");
    end.classList.add("hidden");
    questionDiv.classList.add("hidden");
    clearInterval(interval)
}
// function scoreRender() {
//     scoreContainer.style.display = "block";
//     let scorePercent = Math.round(100 * score / questions.length);
//     scoreContainer.innerHTML = "<h1>" + scorePercent + "%<h1>";
// }	


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
var data = {
    initials:initials.value,
    score:score
} 
highScores.push(data)
localStorage.setItem("highScores", JSON.stringify(highScores))
}

var highScores = JSON.parse(localStorage.getItem("highScores"))||[]
