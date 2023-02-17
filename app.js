let time = 1500; // 25 minutes in seconds
let timerInterval;

const startButton = document.getElementById('startButton');
const playIcon = startButton.querySelector('i');
const timer = document.getElementById('timer');
const modeSwitch = document.getElementById('modeSwitch');

startButton.addEventListener('click', function() {
  if (startButton.classList.contains('active')) {
    clearInterval(timerInterval);
    startButton.classList.remove('active');
    playIcon.classList.remove('bi-pause');
    playIcon.classList.add('bi-play');
  } else {
    startButton.classList.add('active');
    timerInterval = setInterval(updateTimer, 1000);
    playIcon.classList.remove('bi-play');
    playIcon.classList.add('bi-pause');
  }
});

modeSwitch.addEventListener('change', function() {
  if (modeSwitch.checked) {
    time = 300; // 5 minutes in seconds
    timer.textContent = '05:00';
    modeSwitch.nextElementSibling.textContent = 'Rest';
  } else {
    time = 1500; // 25 minutes in seconds
    timer.textContent = '25:00';
    modeSwitch.nextElementSibling.textContent = 'Work';
  }
});

function updateTimer() {
  time--;
  let minutes = Math.floor(time / 60).toString().padStart(2, '0');
  let seconds = (time % 60).toString().padStart(2, '0');
  timer.textContent = `${minutes}:${seconds}`;
  if (time == 0) {
    clearInterval(timerInterval);
    startButton.classList.remove('active');
    playIcon.classList.remove('bi-pause');
    playIcon.classList.add('bi-play');
  }
}