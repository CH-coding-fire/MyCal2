import './CalendarFutureOrder.css'
import {useState} from "react";
import {getDateRange, getDayName, getNextDay} from "./services/getDateRange";
import {DateRange} from "./services/DateRange";


export function CalendarFutureOrder() {
    const currentDate = new Date();
    const firstDayOfCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const [monthAndYear, setMonthAndYear] = useState<Date>(new Date(firstDayOfCurrentMonth))
    const dayRange = getDateRange(monthAndYear)
    const [selectedDate, setSelectedDate] = useState<Date | null>(getNextDay(currentDate))
    const handleSelectedDate = (dateObj: Date): void => {
        setSelectedDate(dateObj)
    }

    const changeMonth = (monthDelta: number) => {
        const newDate = new Date(
            monthAndYear.getFullYear(),
            monthAndYear.getMonth() + monthDelta,
            monthAndYear.getDate()
        );
        setMonthAndYear(newDate);
        setSelectedDate(null)
    };
    return (
        <div>
            <h1>MyCal</h1>
            <div>
                firstDayOfViewingMonth: {monthAndYear.getFullYear()} - {monthAndYear.toLocaleString('default', {month: 'long'})} - {monthAndYear.getDate()} - {getDayName(monthAndYear)}
            </div>

            <div>
                Selected Date:
                {selectedDate ? (
                    <div>
                        {selectedDate.getFullYear()} - {selectedDate.toLocaleString('default', {month: 'long'})} - {selectedDate.getDate()} - {getDayName(selectedDate)}
                    </div>
                ):<div style={{color:"red"}}>Nothing is selected!!!</div>}
            </div>


            <button onClick={() => changeMonth(-1)}>Last month</button>
            <button onClick={() => changeMonth(1)}>Next month</button>

            <DateRange
                dayRange={dayRange}
                selectedDate={selectedDate}
                handleSelectedDate={handleSelectedDate}
                currentDate={currentDate}
            />
        </div>
    )
}





