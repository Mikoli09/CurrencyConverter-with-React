import { useState } from "react";
import "./style.css"
import currencies from "../assets";
import CalculateButton from "../CalculateButton";


const Form = () => {

  const [currencyFrom, setSubcurrency] = useState(currencies[0]);
  const [currencyTo, setFinalCurrency] = useState(currencies[0]);
  const [amountToConvert, convertAmount] = useState("");
  const [result, calculateResult] = useState("")

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(
      `${amountToConvert} ${currencyFrom.name}
      =
       ${(amountToConvert * currencyFrom.toSubRatio * currencyTo.toFinalRatio).toFixed(2)} ${currencyTo.name}`
    );
  };

  return (
    <div>
      <form
        onSubmit={onFormSubmit}
      >
        <div className="form__container">
          <p className="form__paragraph">Chcę przeliczyć </p>
          <div className="form_test">
            <select
              className="form__select"
              value={currencyFrom.name}
              onChange={(event) => {
                setSubcurrency(currencies.find((currency) => currency.name === event.target.value));
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
            na
            <select
              className="form__select"
              value={currencyTo.name}
              onChange={(event) => {
                setFinalCurrency(currencies.find((currency) => currency.name === event.target.value));
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
        <p className="form__paragraph">
          <label for="amount"><span className="form__label">Wprowadź kwotę do przeliczenia:</span></label>
          <input
            className="form__amount"
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
        <CalculateButton currencyFrom={currencyFrom} currencyTo={currencyTo} />
        <p className="form__resultParagraph">{result}</p>
      </form>
    </div >
  );

};

export default Form;