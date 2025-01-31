
import { useState } from "react";
import "./style.css"

const Form = ({ currencies }) => {

  const [selectedCurrencyFrom, setSubcurrency] = useState("");
  const [selectedCurrencyTo, setFinalCurrency] = useState("");
  const [amountToConvert, convertAmount] = useState("");
  const [result, calculateResult] = useState("")

  const data = {
    selectedCurrencyFrom,
    selectedCurrencyTo,
    amountToConvert
  };

  const calculatedValue = (data) => {
    const finalResult =
      `${data.amountToConvert} ${data.selectedCurrencyFrom.name}
     =
      ${(amountToConvert * data.selectedCurrencyFrom.toSubcurrencyConverter * data.selectedCurrencyTo.toFinalCurrencyConverter).toFixed(2)} ${data.selectedCurrencyTo.name}`;

    calculateResult(finalResult);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculatedValue(data);
  };

  return (
    <div>
      <form
        onSubmit={onFormSubmit}
      >
        <p className="form__paragraph">Chcę przeliczyć
          <select
            className="form__select"
            value={selectedCurrencyFrom.name}
            onChange={(event) => {
              const selectedCurrency = currencies.find((currency) => currency.name === event.target.value);
              setSubcurrency(selectedCurrency);
            }}
          >
            {currencies.map((currency) => (
              <option key={currency.id} value={currency.name}>{currency.name}</option>
            ))}
          </select>
          na
          <select
            className="form__select"
            value={selectedCurrencyTo.name}
            onChange={(event) => {
              setFinalCurrency(currencies.find((currency) => currency.name === event.target.value));
            }}
          >
            {currencies.map((currency) => (
              <option key={currency.id} value={currency.name}>{currency.name}</option>
            ))
            }
          </select>
        </p>
        <p className="form__paragraph">
          <label for="amount"><span className="form__label">Wprowadź kwotę do przeliczenia:</span></label>
          <input className="form__amount"
            type="number"
            step="0.01"
            min="0"
            max="1000000000"
            required
            placeholder="Ilość pieniędzy"
            value={amountToConvert}
            onChange={(event) => convertAmount(event.target.value)}
          />
        </p>
        <p>
          <button
            className="form__button"
          >
            Przelicz
          </button>
        </p>
        <p className="form__resultParagraph">{result}</p>
      </form>
    </div >
  );

};

export default Form;