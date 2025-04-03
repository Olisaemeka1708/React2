let countdownInterval;

function startCountdown() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    let totalTime = (hours * 3600) + (minutes * 60) + seconds;
    if (totalTime <= 0) {
        alert('Please set a valid time.');
        return;
    }

    clearInterval(countdownInterval);
    updateDisplay(totalTime);
    countdownInterval = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerText = 'Time is up!';
            alert('Time is up!');
            return;
        }
        totalTime--;
        updateDisplay(totalTime);
    }, 1000);
}

function updateDisplay(time) {
    const h = Math.floor(time / 3600).toString().padStart(2, '0');
    const m = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const s = (time % 60).toString().padStart(2, '0');
    document.getElementById('countdown').innerText = `${h}:${m}:${s}`;
}
