const daysDiv = document.querySelector('#days');
const hoursDiv = document.querySelector('#hours');
const minutesDiv = document.querySelector('#minutes');
const secondsDiv = document.querySelector('#seconds');

var upgradeTime = 172801;
var seconds = upgradeTime;

function timer() {
  var days = Math.floor(seconds / 24 / 60 / 60);
  var hoursLeft = Math.floor(seconds - days * 86400);
  var hours = Math.floor(hoursLeft / 3600);
  var minutesLeft = Math.floor(hoursLeft - hours * 3600);
  var minutes = Math.floor(minutesLeft / 60);

  var remainingSeconds = seconds % 60;

  function pad(n) {
    return n < 10 ? '0' + n : n;
  }

  daysDiv.innerHTML = pad(days);
  hoursDiv.innerHTML = pad(hours);
  minutesDiv.innerHTML = pad(minutes);
  secondsDiv.innerHTML = pad(remainingSeconds);

  if (seconds == 0) {
    clearInterval(countdownTimer);
  } else {
    seconds--;
  }
}

setInterval('timer()', 1000);
