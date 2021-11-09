let cs = 0;
let s = 0;
let m = 0;
let timer;
let stopwatch = document.querySelector('.stopwatch');
let laps = document.querySelector('.laps');

let startBtn = document.querySelector('#button-start');
let pauseBtn = document.querySelector('#button-pause');
let stopBtn = document.querySelector('#button-stop');
let resetBtn = document.querySelector('#button-reset');
let saveBtn = document.querySelector('#button-save');
let clearBtn = document.querySelector('#button-clear');

startBtn.onclick = start;
pauseBtn.onclick = pause;
stopBtn.onclick = stop;
resetBtn.onclick = reset;
saveBtn.onclick = save;
clearBtn.onclick = clear;

function runTimer() {
  stopwatch.textContent = getTimer();
  cs++;
  if (cs === 100) {
    cs = 0;
    s++;
  }
  if (s === 60) {
    s = 0;
    m++;
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = false;
}

function getTimer() {
  return (
    (m < 10 ? '0' + m : m) +
    ':' +
    (s < 10 ? '0' + s : s) +
    ':' +
    (cs < 10 ? '0' + cs : cs)
  );
}

function start() {
  if (!timer) {
    timer = setInterval(runTimer, 10);
  }
}

function pause() {
  stopTimer();
}

function stop() {
  stopTimer();
  m = 0;
  s = 0;
  cs = 0;
  stopwatch.textContent = getTimer();
}

function reset() {
  stop();
  start();
}

function save() {
  if (timer) {
    let li = document.createElement('li');
    li.innerText = getTimer();
    laps.appendChild(li);
  }
}

function clear() {
  laps.innerHTML = '';
}
