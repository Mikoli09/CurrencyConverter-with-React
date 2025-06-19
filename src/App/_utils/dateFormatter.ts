export const formatClockDate = (date: Date): string =>
    date.toLocaleString(
        'en-GB', {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });


export const formatSourceDate = (date: Date): string =>
    date.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
