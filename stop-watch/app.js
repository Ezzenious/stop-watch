const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

let seconds = 0;
let minutes = 0;
let hours = 0;

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

  seconds = convertTimer(seconds);
  minutes = convertTimer(minutes);
  hours = convertTimer(hours);

  displayTimer.innerText = hours + ":" + minutes + ":" + seconds;
}

window.setInterval(stopWatch, 1000);

function convertTimer(num) {
  let time = 0;
  if (num < 10) {
    time = "0" + num.toString();
  }
  return time;
}
