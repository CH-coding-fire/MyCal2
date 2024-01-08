import {EXPIRY_DAYS_RANGE_T_PLUS_29} from "../../../constants/futureCalendar.constant";

export function isWithinExpiryRange(date: Date, currentDate: Date): boolean {
    const currentDateMidnight = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const inputDateMidnight = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const dateAfterCertainDays = new Date(
        currentDateMidnight.getFullYear(),
        currentDateMidnight.getMonth(),
        currentDateMidnight.getDate() + EXPIRY_DAYS_RANGE_T_PLUS_29
    );
    return inputDateMidnight >= currentDateMidnight && inputDateMidnight <= dateAfterCertainDays;
}
