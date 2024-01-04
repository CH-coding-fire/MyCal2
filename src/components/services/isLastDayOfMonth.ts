export function isLastDayOfMonth(date: Date): boolean {
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    const previousDay = new Date(nextMonth);
    previousDay.setDate(previousDay.getDate() - 1);

    return date.getDate() === previousDay.getDate();
}
