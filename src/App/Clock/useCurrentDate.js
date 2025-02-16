import { useEffect } from "react"
import { useState } from "react";

export const useCurrentDate = () => {
    const [actualDate, setActualDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setActualDate(new Date())
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return actualDate;
};