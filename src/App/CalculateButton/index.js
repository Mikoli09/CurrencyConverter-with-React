import { Button } from "./styled";
import { Paragraph } from "../Form/styled";

const CalculateButton = ({ currencyFrom, currencyTo }) => {
    const isCurrencyFromValid = currencyFrom?.id > 0;
    const isCurrencyToValid = currencyTo?.id > 0;

    return (
        <Paragraph>
            <Button
                disabled={!isCurrencyFromValid || !isCurrencyToValid}
            >
                Convert
            </Button>
        </Paragraph>
    )
};

export default CalculateButton;