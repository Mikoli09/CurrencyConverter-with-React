import { Button } from "./styled";
import { Paragraph } from "../Form/styled";
import { CurrencyItem } from "../types";


interface CalculateButtonProps {
    currencyFrom: CurrencyItem | null;
    currencyTo: CurrencyItem | null;
    amountToConvert: number | undefined;
}

const CalculateButton = ({ currencyFrom, currencyTo, amountToConvert }:CalculateButtonProps) => {
    const isCurrencyFromValid = !!currencyFrom && currencyFrom.id > 0;
    const isCurrencyToValid = !!currencyTo && currencyTo?.id > 0;
    const isAmountValid = !!amountToConvert && amountToConvert > 0;

    return (
        <Paragraph>
            <Button
                disabled={!isCurrencyFromValid || !isCurrencyToValid || !isAmountValid}
            >
                Convert
            </Button>
        </Paragraph>
    )
};

export default CalculateButton;