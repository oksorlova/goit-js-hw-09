import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector("button[data-start]");
startBtn.disabled = true;
const dayTimerValue = document.querySelector("[data-days]");
const hoursTimerValue = document.querySelector("[data-hours]");
const minutesTimerValue = document.querySelector("[data-minutes]");
const secondsTimerValue = document.querySelector("[data-seconds]");
let deltaDate = 0;
let timerId = null;
let currentDate = 0;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      currentDate = selectedDates[0];
      if (currentDate < new Date()) {
        window.alert("Please choose a date in the future");
      }
      else {
        startBtn.disabled = false;
      }
    },
  };

  flatpickr('#datetime-picker', options);

  startBtn.addEventListener ('click', () => {
    timerId = setInterval(() => {
        deltaDate = currentDate - new Date();
        const {days, hours, minutes, seconds} = convertMs(deltaDate);
        if (seconds === 0 && minutes === 0 && hours === 0 && days === 0 || currentDate < new Date() ) {
            clearInterval(timerId)            
          }
          updateTimer ({days, hours, minutes, seconds});
      
    }, 1000);
  });

  function updateTimer ({days, hours, minutes, seconds}) {
    dayTimerValue.textContent = days;
    hoursTimerValue.textContent = hours;
    minutesTimerValue.textContent = minutes;
    secondsTimerValue.textContent = seconds;
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  };


  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  };

  


