import { useState } from "react";
import "./style.css";
import currencies from "../assets/currencies";
import CalculateButton from "../CalculateButton";

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
    <form
      className="form"
      onSubmit={onFormSubmit}
    >
      <div className="form__container">
        <p className="form__paragraph">Convert: </p>
        <div className="form__selectContainer">
          <select
            className="form__select"
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
          </select>
          to
          <select
            className="form__select"
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
          </select>
        </div>
      </div>
      <div className="form__container">
        <label htmlFor="amount">
          <span className="form__label">
            Amount to convert:
          </span>
        </label>
        <input
          className="form__amount"
          type="number"
          step="0.01"
          min="0"
          max="1000000000"
          required
          placeholder="Amount"
          value={amountToConvert}
          onChange={(event) => setAmountToConvert(event.target.value)}
        />
      </div>
      <CalculateButton
        currencyFrom={currencyFrom}
        currencyTo={currencyTo}
      />
      <p className="form__resultParagraph">
        {result}
      </p>
    </form>
  );
};

export default Form;