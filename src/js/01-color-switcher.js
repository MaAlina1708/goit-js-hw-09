const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const COLOR_DELAY = 1000;
let intervalId = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartBtnClick() {
  startBtn.disabled = true;

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, COLOR_DELAY);
}

function onStopBtnClick() {
  clearInterval(intervalId);
  startBtn.disabled = false;
}
