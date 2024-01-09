import {isSameDate} from "./services/isSameDate";
import "./DateRange.css"
import {isWithinExpiryRange} from "./services/isWithinExpiryRange";

export function DateRange(props: {
    dayRange: Date[],
    selectedDate: Date | null,
    handleSelectedDate:(dateObj: Date) => void,
    currentDate:Date
}) {
    return (
        <div className="date-container">
            <div className="weekday-name">M</div>
            <div className="weekday-name">T</div>
            <div className="weekday-name">W</div>
            <div className="weekday-name">T</div>
            <div className="weekday-name">F</div>
            <div className="weekday-name">S</div>
            <div className="weekday-name">S</div>
            {props.dayRange.map((item, index) => {
                const isSelectedDate = props.selectedDate && isSameDate(item, props.selectedDate);
                return (
                    <div
                        className={`date-num`}
                        key={index}
                        onClick={() => {
                            if (isWithinExpiryRange(item, props.currentDate)) {
                                props.handleSelectedDate(item);
                            }
                        }}
                    >

                        <div
                            className={`${isSelectedDate ? 'selectedDate' : ''} 
                            ${isWithinExpiryRange(item, props.currentDate) ? "" : "outOfRange"}`}
                        >
                            <span>
                        {item.getDate()}
                                </span>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}
