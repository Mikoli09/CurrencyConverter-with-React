import { useEffect, useState } from "react"

export const useCurrentDate = (): Date => {
    const [actualDate, setActualDate] = useState<Date>(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setActualDate(new Date())
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return actualDate;
};