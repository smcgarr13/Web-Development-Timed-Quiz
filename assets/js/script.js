
// Timer
// referenced: https://codepen.io/TLJens/pen/azedap
var interval;

function countdown() {
  clearInterval(interval);
  interval = setInterval( function() {
      var timer = $('.js-timeout').html();
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

      $('.js-timeout').html(minutes + ':' + seconds);

      if (minutes == 0 && seconds == 0) clearInterval(interval);
  }, 1000);
}

$('#btn').click(function () {
  $('.js-timeout').text("2:00");
  countdown();
});

// $('#js-resetTimer').click(function () {
//   $('.js-timeout').text("2:00");
//   clearInterval(interval);
// });









// // referenced: https://www.w3schools.com/howto/howto_js_countdown.asp
// // Set the date we're counting down to
// // var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
// var countDownTime = new Time("0").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
// //   var now = new Date().getTime();
// var now = new Time().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownTime - now;

//   // Time calculations for days, hours, minutes and seconds
// //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
// //   document.getElementById("timer").innerHTML = days + "d " + hours + "h "
// //   + minutes + "m " + seconds + "s ";
// document.getElementById("timer").innerHTML = seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("timer").innerHTML = "EXPIRED";
//   }
// }, 1000);