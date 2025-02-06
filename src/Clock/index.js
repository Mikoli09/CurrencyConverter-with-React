
import "./style.css";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
    const { dateString } = useCurrentDate();

    return (
        <aside className="section__aside">
            <p>Dzisiaj jest {dateString}</p>
        </aside>
    )
};

export default Clock;