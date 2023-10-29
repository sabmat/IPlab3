const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    // Функція виведення часу на екран
    displayTime: function() {
        const timeDisplay = document.getElementById("timeDisplay");
        timeDisplay.textContent = `${this.hours}:${this.minutes}:${this.seconds}`;
    },

    // Функція зміни часу на передану кількість секунд
    addSeconds: function(seconds) {
        const totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
        this.hours = Math.floor(totalSeconds / 3600);
        this.minutes = Math.floor((totalSeconds % 3600) / 60);
        this.seconds = totalSeconds % 60;
    },

    // Функція зміни часу на передану кількість хвилин
    addMinutes: function(minutes) {
        const totalMinutes = this.hours * 60 + this.minutes + minutes;
        this.hours = Math.floor(totalMinutes / 60);
        this.minutes = totalMinutes % 60;
    },

    // Функція зміни часу на передану кількість годин
    addHours: function(hours) {
        this.hours += hours;
    },
};

function displayTime() {
    time.displayTime();
}

function addSeconds(seconds) {
    time.addSeconds(seconds);
    time.displayTime();
}

function addMinutes(minutes) {
    time.addMinutes(minutes);
    time.displayTime();
}

function addHours(hours) {
    time.addHours(hours);
    time.displayTime();
}