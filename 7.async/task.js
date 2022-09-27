
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.')
        }
        if(this.alarmCollection.some(alarm => alarm.id === id)) {
            console.error("Будильник с таким id уже существует.");
        } else {
            this.alarmCollection.push({id: id, time: time, callback: callback});
        }
    }

    removeClock(id) {
        const countAlarm = this.alarmCollection.length;
        this.alarmCollection.filter(alarm => alarm.id != id);
        return countAlarm != this.alarmCollection.length;
    }

    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString().slice(0,-3);
    }

    start() {
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach((alarm) => {
                    if (this.getCurrentFormattedTime() === alarm.time) {
                        alarm.callback();
                    }
                })
            })
        }
    }


    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null; 
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`)
        this.alarmCollection.forEach((alarm) => {
            console.log(`Будильник №${alarm.id} заведен на ${alarm.time}`); 
        });
    }
    
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}


let phoneAlarm = new AlarmClock();
phoneAlarm.getCurrentFormattedTime();
phoneAlarm.addClock("22:13", () => console.log("Пора вставать"), 1);
phoneAlarm.addClock("22:14", () => {console.log("Давай вставай уже!"); phoneAlarm.removeClock(2)}, 2);
phoneAlarm.addClock("09:01", () => console.log("Иди умываться"));
phoneAlarm.addClock("22:14", () => {console.log("Вставай, а то проспишь!");
                                    phoneAlarm.clearAlarms();
                                    phoneAlarm.printAlarms();
                                    }, 3);
phoneAlarm.addClock("21:46", () => console.log("Вставай, а то проспишь!"), 1);
phoneAlarm.printAlarms();
phoneAlarm.start();