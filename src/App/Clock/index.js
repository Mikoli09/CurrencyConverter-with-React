import { useCurrentDate } from "./useCurrentDate";
import { Aside } from "./styled";
import { formatClockDate } from "../_utils/dateFormatter";

const Clock = () => {
    const actualDate = useCurrentDate();

    return (
        <Aside>
            <p>Today is {formatClockDate(actualDate)}</p>
        </Aside>
    )
};

export default Clock;