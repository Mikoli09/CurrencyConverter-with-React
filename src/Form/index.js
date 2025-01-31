
import { useState } from "react";
import "./style.css"

const Form = ({ currencies }) => {

  const [currencyFrom, setSubcurrency] = useState("");
  const [currencyTo, setFinalCurrency] = useState("");
  const [amountToConvert, convertAmount] = useState("");
  const [result, calculateResult] = useState("")

  // const data = {
  //   currencyFrom,
  //   currencyTo,
  //   amountToConvert
  // };

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
        <p className="form__paragraph">Chcę przeliczyć
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
        </p>
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