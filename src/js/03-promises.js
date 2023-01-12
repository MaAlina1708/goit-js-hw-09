import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');

let delay = 0;
let step = 0;
let amount = 0;

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmitCreatePromise);

function onFormInput() {
  delay = inputDelay.valueAsNumber;
  step = inputStep.valueAsNumber;
  amount = inputAmount.valueAsNumber;
  return { delay, step, amount };
}

function onFormSubmitCreatePromise(event) {
  event.preventDefault();
  for (let i = 0; i < amount; i += 1) {
    console.log(delay);
    createPromise(1 + i, delay) //delay + i * step
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setInterval(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
