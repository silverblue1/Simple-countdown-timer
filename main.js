const log = (arg) => console.log(arg);

const defaultCountDownTime = 30;

let currentTime = 0;

const timerTextClass = ".timer-time";
const timerStartBtnClass = ".countdown-start-btn";
const timerInputTextClass = ".timer-input";

const presetBtnClass = ".preset-btn";

const timerTextRef = document.querySelector(timerTextClass);
const timerInputRef = document.querySelector(timerInputTextClass);
const countdownStartBtn = document.querySelector(timerStartBtnClass);

const allPresetBtns = document.querySelectorAll(presetBtnClass);

let timer = null;

const startCountDown = (timerInputRef, timerTextRef, countDownTime) => {
    if(timer !== null) {
        clearInterval(timer);
    }

    if(Number(timerInputRef.value) > 0) {
        currentTime = timerInputRef.value;
    } else {
        currentTime = countDownTime;
    }

    timer = setInterval(() => {
        document.title = `${currentTime}`;
        timerTextRef.innerText = currentTime.toString();
        currentTime--;

        if(currentTime < 0) {
            clearInterval(timer);
            timerTextRef.innerText = "Finished!";
        }
    }, 1000);

}

for(let i=0; i<allPresetBtns.length; i++) {
    allPresetBtns[i].addEventListener('click', (e) => {
        const timeToCount = Number(allPresetBtns[i].innerHTML);
        startCountDown(timerInputRef, timerTextRef, timeToCount);
    });
}

countdownStartBtn.addEventListener('click', (e) => {
    startCountDown(timerInputRef, timerTextRef, defaultCountDownTime);
    console.log("timer running...");
})