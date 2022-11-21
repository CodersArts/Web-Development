const counterFormArea = document.querySelector ('.form-area');
const counterForm = document.getElementById ('counter-form');
const counterEl = document.getElementById ('counter');

const counterTitleEl = document.getElementById ('counter-title');
const timeElements = document.querySelectorAll ('span');
const counterResetBtn = document.getElementById ('counter-reset');

const complete = document.getElementById ('complete');
const completeInfo = document.getElementById ('complete-info');
const completeBtn = document.getElementById ('complete-button');

const datePicker = document.getElementById ('counter-date');

let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let title = '';
let date = '';

let today = new Date ().toISOString ().split ('T')[0];
console.log (today);

datePicker.setAttribute ('min', today);

function updateDom () {
  countdownActive = setInterval (() => {
    let now = new Date ().getTime ();
    let distance = countdownValue - now;
    //   console.log (distance);
    const days = Math.floor (distance / day);
    const hours = Math.floor (distance % day / hour);
    const minutes = Math.floor (distance % hour / minute);
    const seconds = Math.floor (distance % minute / second);

    if (distance < 0) {
      counterEl.hidden = true;
      counterFormArea.hidden = true;
      complete.hidden = false;
      clearInterval (countdownActive);
      completeInfo.textContent = `${title} is finished on ${date}`;
    } else {
      timeElements[0].textContent = days;
      timeElements[1].textContent = hours;
      timeElements[2].textContent = minutes;
      timeElements[3].textContent = seconds;
      counterTitleEl.textContent = title;
      counterFormArea.hidden = true;
      counterEl.hidden = false;
    }
  }, 1000);
}

function updateCountdown (e) {
  e.preventDefault ();
  title = e.srcElement[0].value;
  date = e.srcElement[1].value;

  const savedCountdown = {
    title: title,
    date: date,
  };

  localStorage.setItem ('countdown', JSON.stringify (savedCountdown));

  console.log (title, date);
  if (date === '') {
    alert ('Please enter a date!');
  } else {
    countdownValue = new Date (date).getTime ();
    console.log (countdownValue);
    updateDom ();
  }
}

function reset () {
  localStorage.removeItem ('countdown');
  counterEl.hidden = true;
  complete.hidden = true;
  clearInterval (countdownActive);
  title = '';
  date = '';
  counterFormArea.hidden = false;
}

function restoreCountdown () {
  if (localStorage.getItem ('countdown')) {
    counterFormArea.hidden = true;
    let countdownData = JSON.parse (localStorage.getItem ('countdown'));
    title = countdownData.title;
    date = countdownData.date;
    countdownValue = new Date (date).getTime ();
    updateDom ();
  }
}

counterForm.addEventListener ('submit', updateCountdown);
counterResetBtn.addEventListener ('click', reset);
completeBtn.addEventListener ('click', reset);

restoreCountdown ();
