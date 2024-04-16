let tensEl = document.getElementById('tens')
let secondsEl = document.getElementById('seconds')
let minEl = document.getElementById('min')
let buttonDiv = document.getElementById('btn-div')
let lapList = document.getElementById('lapList')

let startBtn = document.getElementById('start')
let pauseBtn = document.getElementById('pause')
let resetBtn = document.getElementById('reset')
let lapBtn = document.getElementById('lap')

let minute = 0
let seconds = 0
let tens = 0
let interval
let timerRunning = false

function startTimer() {
    if (!timerRunning) {
        timerRunning = true
        interval = setInterval(stopWatch, 10)
        startBtn.disabled = true
        pauseBtn.disabled = false
    }
}

function pauseTimer() {
    clearInterval(interval)
    timerRunning = false
    startBtn.disabled = false
    pauseBtn.disabled = true
}

function resetTimer() {
    clearInterval(interval)
    timerRunning = false
    tens = 0
    minute = 0
    seconds = 0
    tensEl.textContent = "00"
    minEl.textContent = "00"
    secondsEl.textContent = "00"
    startBtn.disabled = false
    pauseBtn.disabled = true
    lapList.innerHTML = ""
}

function stopWatch() {
    tens++
    if (tens <= 9) tensEl.textContent = "0" + tens
    else tensEl.textContent = tens

    if (tens === 99) {
        tens = 0
        seconds++
        if (seconds <= 9) secondsEl.textContent = "0" + seconds
        else secondsEl.textContent = seconds
        if (seconds === 59) {
            seconds = 0
            minute++
            if (minute <= 9) minEl.textContent = "0" + minute
            else minEl.textContent = minute
        }
    }
}

function recordLap() {
    const lapTime = `${minEl.textContent}:${secondsEl.textContent}:${tensEl.textContent}`
    const lapItem = document.createElement('li')
    lapItem.textContent = lapTime
    lapList.appendChild(lapItem)
}