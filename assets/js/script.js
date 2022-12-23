
// Timer
// referenced: https://codepen.io/TLJens/pen/azedap
var startButton = document.querySelector("#quiz-button")
var startDiv = document.querySelector("#start-div")
var questionDiv = document.querySelector("#question-div")
var questionEl = document.querySelector("#question")
var button1 = document.querySelector("#choice1")
var button2 = document.querySelector("#choice2")
var button3 = document.querySelector("#choice3")
var button4 = document.querySelector("#choice4")
var interval;
var questionCounter = 0

var questions = [
    {
        question: "Commonly used data types Do Not Include: ",
        choices: ["a", "b", "c", "d"],
        answer: "a" //if a sentence would have to be exactly the same as what's noted in choices
    }
]

function countdown() {
    clearInterval(interval);
    interval = setInterval( function() {
    var timeEl = document.querySelector('.js-timeout');
    var timer = timeEl.innerHTML;
      timer = timer.split(':');
      var minutes = timer[0];
      var seconds = timer[1];
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
          minutes -= 1;
          seconds = 59;
      }
      else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

      timeEl.innerHTML = (minutes + ':' + seconds);

      if (minutes == 0 && seconds == 0) clearInterval(interval);
  }, 1000);
}

// Event Listener
function startQuiz(){
    countdown() 
    startDiv.classList.add("hidden");
    questionDiv.classList.remove("hidden");
    questionEl.textContent = questions[questionCounter].question
    button1.textContent = questions[questionCounter].choices[0]
    button2.textContent = questions[questionCounter].choices[1]
    button3.textContent = questions[questionCounter].choices[2]
    button4.textContent = questions[questionCounter].choices[3]
}
function nextQuestion(){
    questionCounter++
    questionEl.textContent = questions[questionCounter].question
    button1.textContent = questions[questionCounter].choices[0]
    button2.textContent = questions[questionCounter].choices[1]
    button3.textContent = questions[questionCounter].choices[2]
    button4.textContent = questions[questionCounter].choices[3]
}

startButton.addEventListener("click", startQuiz)
button1.addEventListener("click", nextQuestion)










