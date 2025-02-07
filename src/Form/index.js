import { useState } from "react";
import currencies from "../assets/currencies";
import CalculateButton from "../CalculateButton";
import { StyledForm,
  Container,
  Paragraph,
  SelectContainer,
  Select,
  Label,
  Amount,
  ResultParagraph

} from "./styled";


const Form = () => {

  const [currencyFrom, setCurrencyFrom] = useState(currencies[0]);
  const [currencyTo, setCurrencyTo] = useState(currencies[0]);
  const [amountToConvert, setAmountToConvert] = useState("");
  const [result, calculateResult] = useState("")

  const convertedValue = (amountToConvert * currencyFrom.toSubRatio * currencyTo.toFinalRatio).toFixed(2);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(
      `${amountToConvert} ${currencyFrom.name}
      =
       ${convertedValue} ${currencyTo.name}`
    );
  };

  return (
    <StyledForm
      onSubmit={onFormSubmit}
    >
      <Container>
        <Paragraph>
          Convert:
        </Paragraph>
        <SelectContainer>
          <Select
            value={currencyFrom.name}
            onChange={(event) => {
              setCurrencyFrom(currencies.find((currency) => currency.name === event.target.value));
            }}
          >
            {currencies.map((currency) => (
              <option
                key={currency.id}
                value={currency.name}
              >{currency.name}
              </option>
            ))}
          </Select>
          to
          <Select
            value={currencyTo.name}
            onChange={(event) => {
              setCurrencyTo(currencies.find((currency) => currency.name === event.target.value));
            }}
          >
            {currencies.map((currency) => (
              <option
                key={currency.id}
                value={currency.name
                }>{currency.name}
              </option>
            ))
            }
          </Select>
        </SelectContainer>
      </Container>
      <Container>
        <Label htmlFor="amount">
          <span>
            Amount to convert:
          </span>
        </Label>
        <Amount
          type="number"
          step="0.01"
          min="0"
          max="1000000000"
          required
          placeholder="Amount"
          value={amountToConvert}
          onChange={(event) => setAmountToConvert(event.target.value)}
        />
      </Container>
      <CalculateButton
        currencyFrom={currencyFrom}
        currencyTo={currencyTo}
      />
      <ResultParagraph>
        {result}
      </ResultParagraph>
    </StyledForm>
  );
};

export default Form;