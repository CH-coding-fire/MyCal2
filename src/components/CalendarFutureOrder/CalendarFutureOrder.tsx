import './MyCal.css'
import {useState} from "react";

export function MyCal() {
    const currentDate = new Date();
    const firstDayOfCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const dummies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
    const [days, setDays] = useState(dummies)
    const [monthAndYear, setMonthAndYear] = useState<Date>(new Date(firstDayOfCurrentMonth))

    const changeMonth = (monthDelta:number) => {
        const newDate = new Date(
            monthAndYear.getFullYear(),
            monthAndYear.getMonth() + monthDelta,
            monthAndYear.getDate()
        );
        setMonthAndYear(newDate);
    };

    // const dummyDates =



    return (
        <div>
            <h1>MyCal</h1>
            <div>{monthAndYear.getFullYear()}</div>
            <div>{monthAndYear.toLocaleString('default', { month: 'long' })}</div>
            <div>{monthAndYear.getDate()}</div>
            <button onClick={() => changeMonth(-1)}>Last month</button>
            <button onClick={() => changeMonth(1)}>Next month</button>
            <div className="container">
                <div className="title">Mon</div>
                <div className="title">Tue</div>
                <div className="title">Wed</div>
                <div className="title">Thu</div>
                <div className="title">Fri</div>
                <div className="title">Sat</div>
                <div className="title">Sun</div>
                {dummies.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            {item}
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}





