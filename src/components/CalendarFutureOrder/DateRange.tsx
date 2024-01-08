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
        <div className="container">
            <div className="title">M</div>
            <div className="title">T</div>
            <div className="title">W</div>
            <div className="title">T</div>
            <div className="title">F</div>
            <div className="title">S</div>
            <div className="title">S</div>
            {props.dayRange.map((item, index) => {
                const isSelectedDate = props.selectedDate && isSameDate(item, props.selectedDate);
                return (
                    <div
                        className={`item `}
                        key={index}
                        onClick={() => {
                            if (isWithinExpiryRange(item, props.currentDate)) {
                                props.handleSelectedDate(item);
                            }
                        }}
                    >
                        <span className={`${isSelectedDate ? 'selectedDate' : ''} ${isWithinExpiryRange(item, props.currentDate) ? "" : "outOfRange"}`}>
                        {item.getDate()}
                        </span>
                    </div>
                )
            })
            }
        </div>
    )
}
