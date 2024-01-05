export function areDatesEqual(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();
}

// Example usage:
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-01-01');
const date3 = new Date('2024-01-02');

console.log(areDatesEqual(date1, date2)); // Outputs: true
console.log(areDatesEqual(date1, date3)); // Outputs: false
