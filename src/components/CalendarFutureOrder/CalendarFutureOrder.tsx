import './CalendarFutureOrder.css'
import {useEffect, useState} from "react";
import {getDateRange, getDayName, getNextDay} from "./services/getDateRange";
import {DateRange} from "./services/DateRange";

export function CalendarFutureOrder() {
    const currentMalaysiaTime = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Kuala_Lumpur"}));
    const nextDayOfCurrentMalaysiaTime = getNextDay(currentMalaysiaTime)
    // const currentDate = new Date();
    const firstDateOfCurrentMonth = new Date(currentMalaysiaTime.getFullYear(), currentMalaysiaTime.getMonth(), 1);
    const [monthAndYear, setMonthAndYear] = useState<Date>(new Date(firstDateOfCurrentMonth))
    const dayRange = getDateRange(monthAndYear)
    const [selectedDate, setSelectedDate] = useState<Date | null>(nextDayOfCurrentMalaysiaTime)
    const handleSelectedDate = (dateObj: Date): void => {
        setSelectedDate(dateObj)
    }

    const changeMonth = (monthDelta: (1 | -1)) => {
        const newDate = new Date(
            monthAndYear.getFullYear(),
            monthAndYear.getMonth() + monthDelta,
            monthAndYear.getDate()
        );
        setMonthAndYear(newDate);
        setSelectedDate(null)
    };


    //start of animation

    const [animation, setAnimation] = useState<string>('');
    const [incomingAnimation, setIncomingAnimation] = useState<string>('');

    let startX: number;
    let endX: number;

    const handleSwipe = (): void => {
        const swipeDistance: number = endX - startX;
        if (swipeDistance > 50) {
            setAnimation('animate-right');
            setTimeout(() => {
                changeMonth(-1);
                setIncomingAnimation('incoming-right');
            }, 62.5); // Start the incoming animation earlier (half of 0.125s)
            setTimeout(() => {
                setAnimation('');
                setIncomingAnimation('');
            }, 125); // Reset animations after 0.125s
        } else if (swipeDistance < -50) {
            setAnimation('animate-left');
            setTimeout(() => {
                changeMonth(1);
                setIncomingAnimation('incoming-left');
            }, 62.5); // Start the incoming animation earlier
            setTimeout(() => {
                setAnimation('');
                setIncomingAnimation('');
            }, 125); // Reset animations after 0.125s
        }
    }
    const handleTouchStart = (e: TouchEvent) => {
        startX = e.touches[0].clientX;
    }
    const handleTouchEnd = (e: TouchEvent) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    }
    useEffect(() => {
        const calendarContainer = document.getElementById('calendarContainer');

        if (calendarContainer) {
            calendarContainer.addEventListener('touchstart', handleTouchStart, false);
            calendarContainer.addEventListener('touchend', handleTouchEnd, false);
        }

        // Cleanup function
        return () => {
            if (calendarContainer) {
                calendarContainer.removeEventListener('touchstart', handleTouchStart);
                calendarContainer.removeEventListener('touchend', handleTouchEnd);
            }
        }
    }, [monthAndYear]); // Depend on monthAndYear to update event listeners when it changes

    //end of animation

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
                ) : <div style={{color: "red"}}>Nothing is selected!!!</div>}
            </div>


            <button onClick={() => changeMonth(-1)}>Last month</button>
            <button onClick={() => changeMonth(1)}>Next month</button>

            <div id={"calendarContainer"} className={`${animation} ${incomingAnimation}`}>
                <DateRange
                    dayRange={dayRange}
                    selectedDate={selectedDate}
                    handleSelectedDate={handleSelectedDate}
                    currentDate={currentMalaysiaTime}
                />
            </div>

        </div>
    )
}





