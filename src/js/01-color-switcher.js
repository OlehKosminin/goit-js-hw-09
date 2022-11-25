const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  bodyEl: document.querySelector('body'),
};

let isActive = false;
let intervalId = null;
let buttonStatus = true;
let buttonStart = (refs.btnStart.disabled = false);
let buttonStop = (refs.btnStop.disabled = true);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Start() {
  if (isActive) {
    console.log('This button disabled');
    return;
  }

  isActive = true;
  if (isActive) {
    buttonStart = refs.btnStart.disabled = true;
    buttonStop = refs.btnStop.disabled = false;
  }
  intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();
    refs.bodyEl.style.backgroundColor = `${randomColor}`;
    console.log(`${randomColor}`);
  }, 1000);
  console.log(this.intervalId);
}

function Stop() {
  clearInterval(intervalId);
  intervalId = null;
  isActive = false;

  if (!isActive) {
    buttonStart = refs.btnStart.disabled = false;
    buttonStop = refs.btnStop.disabled = true;
  }

  refs.bodyEl.style.backgroundColor = `#FFFFFF`;
}

refs.btnStart.addEventListener('click', Start);
refs.btnStop.addEventListener('click', Stop);
