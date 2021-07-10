class DateCompare {
    start: Date
    end: Date
    interval:number
    dates:Array<Date>

    constructor(date1: Date, date2: Date, interval: number) {
        this.start = date1
        this.end = date2
        this.interval = interval
        this.dates = []
        this.fillDatesBetween()
    }


    fillDatesBetween() {
        let date = new Date(this.start)

        if (dateCompare(date, this.end) !== 1) {
            let checkDate = new Date(date.valueOf())
            this.dates.push(checkDate)
        }

        while (1) {
            date = addDays(date, this.interval)
            if (dateCompare(date, this.end) !== 1) {
                let checkDate = new Date(date.valueOf())
                this.dates.push(checkDate)
            } else {
                break
            }
        }
    }
}


function addDays(date: Date, days: number) {
    date.setDate(date.getDate() + days)
    return date
}

function dateCompare(date1: Date, date2: Date) {
    if (date1.getFullYear() < date2.getFullYear()) {
        return -1
    }
    if (date1.getFullYear() > date2.getFullYear()) {
        return 1
    }
    if (date1.getMonth() < date2.getMonth()) {
        return -1
    }
    if (date1.getMonth() > date2.getMonth()) {
        return 1
    }
    if (date1.getDate() < date2.getDate()) {
        return -1
    }
    if (date1.getDate() > date2.getDate()) {
        return 1
    }
    return 0
}

module.exports = DateCompare