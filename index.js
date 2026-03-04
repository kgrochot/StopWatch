let secondsElapsed = 0;
let interval = null;

const time = document.getElementById("time");

// Hilfsfunktion: zweistellige Anzeige
function padStart(value) {
    return String(value).padStart(2, "0");
}

// Anzeige aktualisieren
function setTime() {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    time.textContent = `${padStart(minutes)}:${padStart(seconds)}`;
}

// Timer: jede Sekunde erhöhen
function timer() {
    secondsElapsed++;
    setTime();
}

// Starten
function startClock() {
    if (!interval) {
        interval = setInterval(timer, 1000);
    }
}

// Stoppen
function stopClock() {
    clearInterval(interval);
    interval = null;
}

// Reset
function resetClock() {
    stopClock();
    secondsElapsed = 0;
    setTime();
}

// Tastatur-Shortcuts: S = Start, T = Stop, R = Reset
document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    if (key === "s") startClock();
    if (key === "t") stopClock();
    if (key === "r") resetClock();
});