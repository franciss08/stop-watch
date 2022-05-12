let startButton = document.getElementById('start-button');
let stopButton = document.getElementById('stop-button');
let resetButton = document.getElementById('reset-button');
let currentTime = document.getElementById('timer');
let currentTenths = document.getElementById('tenths');

let time = 0;
let timerId; //the setInterval thing? returns an id which thhe clearInterval thing uses to stop that particular timer

function startTimer() {
    clearInterval(timerId);
    timerId = setInterval(increaseTimer, 10); //runs the increase timer function every 10 miliseconds (0.01 seconds)
}

function increaseTimer() {
    let tenths = time % 100;
    let seconds = Math.floor(time/100) % 60;
    let minutes = Math.floor(time / 6000);
    tenths < 10 ? tenths = "0" + tenths : tenths;
    seconds < 10 ? seconds = "0" + seconds : seconds;
    minutes < 10 ? minutes = "0" + minutes : minutes;
    currentTime.innerHTML = `${minutes}:${seconds}.`;
    currentTenths.innerHTML = tenths;
    time++;
}


function stopTimer() {
    clearInterval(timerId);
}

function resetTimer () {
    clearInterval(timerId);
    time = 0;
    currentTime.innerHTML = "00:00.";
    currentTenths.innerHTML = "00";
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);