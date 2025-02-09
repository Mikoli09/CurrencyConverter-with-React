import { Button } from "./styled";
import { Paragraph } from "../Form/styled";

const CalculateButton = ({ currencyFrom, currencyTo }) => (
    <Paragraph>
        <Button
            disabled={currencyFrom.id === 0 || currencyTo.id === 0}
        >
            Convert
        </Button>
    </Paragraph>
);

export default CalculateButton;