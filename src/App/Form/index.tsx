import React, { useState } from "react";
import { SingleValue } from "react-select";
import StyledHeader from "./StyledHeader";
import CalculateButton from "../CalculateButton";
import InfoParagraph from "./InfoParagraph";
import { formatDataFromAPI } from "../_utils/currencyFormatter";
import { FormContainer, StyledSelect } from "./styled";
import {
  StyledForm,
  Container,
  Paragraph,
  SelectContainer,
  Label,
  Amount,
  ResultParagraph
} from "./styled";
import { APIResponse, CurrencyItem } from "../types";

interface FormResponse {
  responseData: APIResponse;
}

const Form = ({ responseData }: FormResponse) => {
  const currencies = formatDataFromAPI(responseData.data);
  const date = new Date(responseData.meta.last_updated_at);

  const [currencyFrom, setCurrencyFrom] = useState<CurrencyItem | null>(null);
  const [currencyTo, setCurrencyTo] = useState<CurrencyItem | null>(null);
  const [amountToConvert, setAmountToConvert] = useState<number>();
  const [result, setResult] = useState("");


  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!currencyFrom || !currencyTo || amountToConvert === undefined) return;

    const convertedValue = (amountToConvert * currencyFrom.toSubRatio * currencyTo.value).toFixed(2);

    setResult(
      `${amountToConvert} ${currencyFrom.code}
      =
       ${convertedValue} ${currencyTo.code}`
    );
  };

  return (
    <FormContainer>
      <StyledHeader />
      <StyledForm
        onSubmit={onFormSubmit}
      >
        <Container>
          <Paragraph>
            Convert:
          </Paragraph>
          <SelectContainer>
            <StyledSelect
              id="from"
              classNamePrefix="react-select"
              openMenuOnClick={true}
              isSearchable={true}
              closeMenuOnSelect={true}
              value={
                currencyFrom
                  ? currencies.find((currency) => currency.code === currencyFrom.code)
                  : null}
              options={currencies}
              onChange={(selectedOption: SingleValue<CurrencyItem>) => {
                if (selectedOption) {
                  setCurrencyFrom(selectedOption);
                }
              }}
            />
            to
            <StyledSelect
              id="to"
              classNamePrefix="react-select"
              openMenuOnClick={true}
              isSearchable={true}
              closeMenuOnSelect={true}
              value={
                currencyTo
                  ? currencies.find((currency) => currency.code === currencyTo.code)
                  : null}
              options={currencies}
              onChange={(selectedOption: SingleValue<CurrencyItem>) => {
                if (selectedOption) {
                  setCurrencyTo(selectedOption);
                }
              }}
            />
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
            onChange={(event) => setAmountToConvert(Number(event.target.value))}
          />
        </Container>
        <CalculateButton
          currencyFrom={currencyFrom}
          currencyTo={currencyTo}
          amountToConvert={amountToConvert}
        />
        <InfoParagraph
          date={date}
        />
        <ResultParagraph>
          {result}
        </ResultParagraph>
      </StyledForm>
    </FormContainer>
  );
};

export default Form;