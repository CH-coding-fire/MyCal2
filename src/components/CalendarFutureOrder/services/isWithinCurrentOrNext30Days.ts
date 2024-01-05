export function isWithinCurrentOrNext30Days(date: Date, currentDate: Date): boolean {
    let currentDateMidnight = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    let inputDateMidnight = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let dateAfter30Days = new Date(currentDateMidnight.getFullYear(), currentDateMidnight.getMonth(), currentDateMidnight.getDate() + 30);
    return inputDateMidnight >= currentDateMidnight && inputDateMidnight <= dateAfter30Days;
}
