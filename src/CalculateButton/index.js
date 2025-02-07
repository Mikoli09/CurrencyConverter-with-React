import { Button } from "./styled";


const CalculateButton = ({ currencyFrom, currencyTo }) => (
    <p className="form__paragraph">
        <Button
            disabled={currencyFrom.id === 0 || currencyTo.id === 0}
        >
            Convert
        </Button>
    </p>
);

export default CalculateButton;