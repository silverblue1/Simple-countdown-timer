const log = (arg) => console.log(arg);

const defaultCountDownTime = 30;

let currentTime = 0;

const timerTextClass = ".timer-time";
const timerStartBtnClass = ".countdown-start-btn";
const timerInputTextClass = ".timer-input";


const timerTextRef = document.querySelector(timerTextClass);
const timerInputRef = document.querySelector(timerInputTextClass);
const countdownStartBtn = document.querySelector(timerStartBtnClass);


let timer = null;

const startCountDown = (timerInputRef, timerTextRef) => {
    if(timer !== null) {
        clearInterval(timer);
    }

    if(Number(timerInputRef.value) > 0) {
        currentTime = timerInputRef.value;
    } else {
        currentTime = defaultCountDownTime;
    }

    timer = setInterval(() => {
        timerTextRef.innerText = currentTime.toString();
        currentTime--;

        if(currentTime < 0) {
            clearInterval(timer);
            timerTextRef.innerText = "Finished!";
        }
    }, 1000);

}

countdownStartBtn.addEventListener('click', (e) => {
    startCountDown(timerInputRef, timerTextRef);
    console.log("timer running...");
})