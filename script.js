let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
let running = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function startTimer() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  running = false;
  updateDisplay();
}
