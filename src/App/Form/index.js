import { useState } from "react";
import StyledHeader from "./StyledHeader";
import CalculateButton from "../CalculateButton";
import InfoParagraph from "./InfoParagraph";
import { formatDataFromAPI } from "../_utils/currencyFormatter";
import {
  StyledForm,
  Container,
  Paragraph,
  SelectContainer,
  Select,
  Label,
  Amount,
  ResultParagraph
} from "./styled";

const Form = ({ responseData }) => {
  const currencies = formatDataFromAPI(responseData.data);
  const date = new Date(responseData.meta.last_updated_at);

  const [currencyFrom, setCurrencyFrom] = useState([]);
  const [currencyTo, setCurrencyTo] = useState([]);
  const [amountToConvert, setAmountToConvert] = useState("");
  const [result, setResult] = useState("");

  const convertedValue = (amountToConvert * currencyFrom.toSubRatio * currencyTo.value).toFixed(2);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setResult(
      `${amountToConvert} ${currencyFrom.code}
      =
       ${convertedValue} ${currencyTo.code}`
    );
  };

  return (
    <>
      <StyledHeader />
      <StyledForm
        onSubmit={onFormSubmit}
      >
        <Container>
          <Paragraph>
            Convert:
          </Paragraph>
          <SelectContainer>
            <Select
              id="from"
              value={currencyFrom.code}
              onChange={(event) => {
                setCurrencyFrom(currencies.find((currency) => currency.code === event.target.value));
              }}
            >
              {currencies.map((currency) => (
                <option
                  key={currency.id}
                  value={currency.code}
                >{currency.code}
                </option>
              ))}
            </Select>
            to
            <Select
              id="to"
              value={currencyTo.code}
              onChange={(event) => {
                setCurrencyTo(currencies.find((currency) => currency.code === event.target.value));
              }}
            >
              {currencies.map((currency) => (
                <option
                  key={currency.id}
                  value={currency.code
                  }>{currency.code}
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
            id="amount"
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
        <InfoParagraph
          date={date}
        />
        <ResultParagraph>
          {result}
        </ResultParagraph>
      </StyledForm>
    </>
  );
};

export default Form;