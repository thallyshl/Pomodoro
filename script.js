const buttonPlay = document.querySelector('.play');
const btnPlayPath = document.querySelector('#playTime');
const buttonStop = document.querySelector('.stop');
const ButtonAddTimer = document.querySelector('.adiciona');
const buttonDiminuiTimer = document.querySelector('.diminui');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let timerTimeOut;

function countdonw() {

  timerTimeOut = setInterval(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    secondsDisplay.textContent = '00';

    if (seconds <= 0) {
      seconds = 60;
      minutesDisplay.textContent = String(minutes - 1).padStart(2, '0');
    }
    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0');

    if (
      Number(minutesDisplay.textContent) === 0 &&
      Number(secondsDisplay.textContent) === 0
    ) {
      clearInterval(timerTimeOut);
      btnPlayPath.classList.remove('playActive');
      console.log('h')
    }
  }, 1000);
}

buttonPlay.addEventListener('click', function () {
  clearInterval(timerTimeOut);

  if (
    Number(minutesDisplay.textContent) === 0 &&
    Number(secondsDisplay.textContent) === 0
  ) {
    return;
  } else {
    path[0].classList.add('playActive');
    path[0].classList.remove('elementsDarkMode')
    countdonw();
  }
});

ButtonAddTimer.addEventListener('click', function () {
  minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5;

  if (Number(minutesDisplay.textContent) < 10) {
    minutesDisplay.textContent = String(
      minutesDisplay.textContent.padStart(2, '0')
    );
  }
});

buttonDiminuiTimer.addEventListener('click', function () {
  if (Number(minutesDisplay.textContent) >= 5) {
    minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5;
  } else {
    minutesDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
    btnPlayPath.classList.remove('playActive');
    clearInterval(timerTimeOut)
  }

  if (Number(minutesDisplay.textContent) < 10) {
    minutesDisplay.textContent = String(
      minutesDisplay.textContent.padStart(2, '0')
    );
  }
});

buttonStop.addEventListener('click', function () {
  btnPlayPath.classList.remove('playActive');
  if (body.classList.contains('bodyDark')) {
    path[0].classList.add('elementsDarkMode')
  }
  clearTimeout(timerTimeOut);
});

// Bot??es de controle de m??sica

let btnFlorest = document.querySelector('#florestBackground');
let iconFlorest = document.querySelector('#iconFlorest');
btnFlorest.addEventListener('click', () => {
  if (
    btnFlorest.classList.contains('active') &&
    iconFlorest.classList.contains('iconActive')
  ) {
    btnFlorest.classList.remove('active');
    iconFlorest.classList.remove('iconActive');
    document.querySelector('#soundFlorest').pause();
  } else {
    btnFlorest.classList.add('active');
    iconFlorest.classList.add('iconActive');
    document.querySelector('#soundFlorest').play();
    document.querySelector('#soundFlorest').loop = true;
  }
});

let btnCoffe = document.querySelector('#coffeBackground');
let iconCoffe = document.querySelector('#iconCoffe');
btnCoffe.addEventListener('click', () => {
  if (
    btnCoffe.classList.contains('active') &&
    iconCoffe.classList.contains('iconActive')
  ) {
    btnCoffe.classList.remove('active');
    iconCoffe.classList.remove('iconActive');
    document.querySelector('#soundCoffe').pause();
  } else {
    btnCoffe.classList.add('active');
    iconCoffe.classList.add('iconActive');
    document.querySelector('#soundCoffe').play();
    document.querySelector('#soundCoffe').loop = true;
  }
});

let btnRain = document.querySelector('#rainBackground');
let iconRain = document.querySelector('#iconRain');
btnRain.addEventListener('click', () => {
  if (
    btnRain.classList.contains('active') &&
    iconRain.classList.contains('iconActive')
  ) {
    btnRain.classList.remove('active');
    iconRain.classList.remove('iconActive');
    document.querySelector('#soundRain').pause();
  } else {
    btnRain.classList.add('active');
    iconRain.classList.add('iconActive');
    document.querySelector('#soundRain').play();
    document.querySelector('#soundRain').loop = true;
  }
});

let btnFire = document.querySelector('#fireBackground');
let iconFire = document.querySelector('#iconFire');
btnFire.addEventListener('click', () => {
  if (
    btnFire.classList.contains('active') &&
    iconFire.classList.contains('iconActive')
  ) {
    btnFire.classList.remove('active');
    iconFire.classList.remove('iconActive');
    document.querySelector('#soundFire').pause();
  } else {
    btnFire.classList.add('active');
    iconFire.classList.add('iconActive');
    document.querySelector('#soundFire').play();
    document.querySelector('#soundFire').loop = true;
  }
});


const body = document.querySelector('body');
const main = document.querySelector('main');
const path = document.getElementsByClassName('btnControl');
const mode = document.querySelector('.modeLight');

document.querySelector('.modeLight').addEventListener('click', () => darkMode());

function darkMode() {
  if (!body.classList.contains('bodyDark')) {
    body.classList.add('bodyDark');
    main.classList.add('elementsDarkMode');
    mode.classList.add('modeDark');
    mode.innerHTML = 'Light';
    for (let n of path) {
      n.classList.add('elementsDarkMode');
    }
  } else {
    body.classList.remove('bodyDark');
    main.classList.remove('elementsDarkMode');
    mode.classList.remove('modeDark');
    mode.innerHTML = 'Dark';
    for (let n of path) {
      n.classList.remove('elementsDarkMode');
    }
  }
}