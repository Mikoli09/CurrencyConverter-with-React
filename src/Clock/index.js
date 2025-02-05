
import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {

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

    return (
        <aside className="section__aside">
            <p>Dzisiaj jest {dateString}</p>
        </aside>
    )
};

export default Clock;