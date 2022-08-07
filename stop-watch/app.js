const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

let seconds = 0;
let minutes = 0;
let hours = 0;

let displayedSeconds = 0;
let displayedMinutes = 0;
let displayedHours = 0;

let displayTimer = document.getElementById("timer");

function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  displayedSeconds = convertTimer(seconds, displayedSeconds);
  displayedMinutes = convertTimer(minutes, displayedMinutes);
  displayedHours = convertTimer(hours, displayedHours);

  displayTimer.innerText =
    displayedHours + ":" + displayedMinutes + ":" + displayedSeconds;
}

let timerInterval = null;
let timerStarted = false;

startStopBtn.addEventListener("click", () => {
  if (!timerStarted) {
    startStopBtn.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
    timerInterval = window.setInterval(stopWatch, 1000);
    timerStarted = true;
  } else {
    startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
    clearInterval(timerInterval);
    timerStarted = false;
  }
});

resetBtn.addEventListener("click", () => {
  if (timerStarted) {
    startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
    clearInterval(timerInterval);
    timerStarted = false;
  }
  displayTimer.innerText = "00:00:00";
  seconds = 0;
  minutes = 0;
  hours = 0;
});

function convertTimer(num, time) {
  if (num < 10) {
    time = "0" + num.toString();
  } else {
    time = num;
  }
  return time;
}
