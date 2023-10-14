const selectors = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]')
}
selectors.stop.disabled = true;

selectors.start.addEventListener('click', handlerClickStart);
selectors.stop.addEventListener('click', handlerClickStop)

function handlerClickStart(event) {
  timerId = setInterval(() => {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    }
    selectors.body.style.backgroundColor = getRandomHexColor()
  }, 1000)
  event.currentTarget.disabled = true
  selectors.stop.disabled = false
}

function handlerClickStop(event) {
  clearInterval(timerId);
  event.currentTarget.disabled = true
  selectors.start.disabled = false
}