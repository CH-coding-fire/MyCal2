export function isWithinNext30Days(date: Date, currentDate: Date): boolean {
    // Reset the time part of the current date to midnight
    let currentDateMidnight = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    // Reset the time part of the input date to midnight
    let inputDateMidnight = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    // Create a new date that is 30 days after the current date, also set to midnight
    let dateAfter30Days = new Date(currentDateMidnight.getFullYear(), currentDateMidnight.getMonth(), currentDateMidnight.getDate() + 30);

    // Compare the input date (at midnight) with the current date (at midnight) and the date 30 days later (also at midnight).
    // The function returns true if the input date is the same as, or within the next 30 days, and false otherwise.
    return inputDateMidnight >= currentDateMidnight && inputDateMidnight <= dateAfter30Days;
}
