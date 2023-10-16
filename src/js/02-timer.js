import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const selectors = {
  input: document.querySelector("#datetime-picker"),
  btn: document.querySelector('button[data-start]'),

  daysValue: document.querySelector('span[data-days]'),
  hoursValue: document.querySelector('span[data-hours]'),
  minutesValue: document.querySelector('span[data-minutes]'),
  secondsValue: document.querySelector('span[data-seconds]')
}

selectors.btn.disabled = true

flatpickr(selectors.input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      alert('Please choose a date in the future')
      selectors.btn.disabled = true
    } else {
      selectors.btn.disabled = false
    }
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  let str = value.toString().padStart(2, '0');
  return str;
}

selectors.btn.addEventListener('click', handlerClick);

function handlerClick() {
  let timer = setInterval(() => {
    let countdown = new Date(selectors.input.value) - new Date();

    console.log(countdown);

    const msValue = convertMs(countdown);

    console.log(msValue);

    selectors.daysValue.textContent = addLeadingZero(msValue.days);
    selectors.hoursValue.textContent = addLeadingZero(msValue.hours);
    selectors.minutesValue.textContent = addLeadingZero(msValue.minutes);
    selectors.secondsValue.textContent = addLeadingZero(msValue.seconds);

    if (countdown < 1000) {
      clearInterval(timer)
    }

  }, 1000)
}
