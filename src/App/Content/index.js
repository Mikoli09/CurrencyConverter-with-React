import Form from "../Form";
import Loading from "../Loading";
import { useCurrencies } from "./useCurrencies";

const Content = () => {
    const { responseData, error } = useCurrencies();

    return (
        (responseData) ?
            <Form
                responseData={responseData}
            />
            :
            <Loading
                error={error}
            />
    )
};

export default Content;