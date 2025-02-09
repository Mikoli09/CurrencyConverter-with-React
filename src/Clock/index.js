import { useCurrentDate } from "./useCurrentDate";
import { Aside } from "./styled";


const Clock = () => {
    const { dateString } = useCurrentDate();

    return (
        <Aside>
            <p>Dzisiaj jest {dateString}</p>
        </Aside>
    )
};

export default Clock;