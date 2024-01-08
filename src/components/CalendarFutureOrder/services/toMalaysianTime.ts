export function toMalaysianTime(date: Date): Date {
    const offset = -480; // Malaysia is UTC+8, so the offset is -480 minutes
    const localTime = new Date(date);
    localTime.setMinutes(date.getMinutes() - date.getTimezoneOffset() + offset);
    return localTime;
}
