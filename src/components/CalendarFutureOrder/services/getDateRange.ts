
export function getDayName(date: Date): string {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[date.getDay()];
}

export function calculateBackwardMonthDays(dayName: string): number {
    const normalizedDayName = dayName.toLowerCase();
    switch (normalizedDayName) {
        case "monday":
            return 0;
        case "tuesday":
            return 1;
        case "wednesday":
            return 2;
        case "thursday":
            return 3;
        case "friday":
            return 4;
        case "saturday":
            return 5;
        case "sunday":
            return 6;
        default:
            alert("Invalid weekday: " + dayName)
            throw new Error("Invalid weekday: " + dayName);
    }
}

function getFirstDayOfMonth(inputDate: Date): Date {
    const year = inputDate.getFullYear();
    const month = inputDate.getMonth();
    return new Date(year, month, 1);
}

function getLastDayOfMonth(inputDate: Date): Date {
    const year = inputDate.getFullYear();
    const month = inputDate.getMonth();
    return new Date(year, month + 1, 0);
}

function getDateBackward(inputDate: Date, daysBack: number): Date {
    let resultDate = new Date(inputDate);
    resultDate.setDate(resultDate.getDate() - daysBack);
    return resultDate;
}

function generateDateRange(startDate: Date, daysToGen: number): Date[] {
    let dateArray: Date[] = [];
    for (let i = 0; i < daysToGen; i++) {
        let newDate = new Date(startDate);
        newDate.setDate(startDate.getDate() + i);
        dateArray.push(newDate);
    }
    return dateArray;
}

export function getNextDay(inputDate: Date): Date {
    let nextDay = new Date(inputDate);
    // Increment the day by 1
    nextDay.setDate(inputDate.getDate() + 1);
    return nextDay;
}

export const getDateRange = (dateObj:Date):Date[]=>{
    const lastDateOfMonth = getLastDayOfMonth(dateObj)
    const backwardMonthDays:number =  calculateBackwardMonthDays(getDayName(getFirstDayOfMonth(dateObj)))
    const startingDate:Date = getDateBackward(dateObj,backwardMonthDays)
    const dateRange = generateDateRange(startingDate,35)

    const isLater:boolean = lastDateOfMonth > dateRange[dateRange.length-1]
    if(isLater){
        const nextDay = getNextDay(dateRange[dateRange.length-1])
        const additionalDateRange = generateDateRange(nextDay, 7)
        return [...dateRange, ...additionalDateRange]
    }else{
        return dateRange
    }
}
