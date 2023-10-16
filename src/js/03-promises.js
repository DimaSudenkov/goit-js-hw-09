const form = document.querySelector(".form");
const firstDelay = document.querySelector('input[name = "delay"]');
const delayStep = document.querySelector('input[name = "step"]');
const amount = document.querySelector('input[name = "amount"]');

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay })
      } else {
        rej({ position, delay })
      }
    }, delay)
  });
}

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  let delay = Number(firstDelay.value);
  const delayStepVal = Number(delayStep.value);
  const amountVal = Number(amount.value);

  for (let position = 1; position <= amountVal; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += delayStepVal;
  }
}