import { useEffect } from "react"
import { useState } from "react";

export const useCurrentDate = () => {
    const [actualDate, setActualDate] = useState(new Date());
    const dateString = actualDate.toLocaleString(
        undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setActualDate(new Date())
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return {dateString}
};