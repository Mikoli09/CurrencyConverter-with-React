
import { useState } from "react";
import "./style.css"

const Form = ({ currencies }) => {


  const [selectedCurrencyFrom, setSubcurrencyRate] = useState("");
  const [selectedCurrencyTo, setFinalCurrencyRate] = useState("");


  return (
    <div>
      <form>
        <p className="form__paragraph">Chcę przeliczyć
          <select
            className="form__select"
            value={selectedCurrencyFrom}
            onChange={(event) => setSubcurrencyRate(event.target.value)}
          >
            {/* <option value="">Wybierz walutę</option> */}
            {currencies.map((currency) => (
              <option key={currency.id} value={currency.toSubcurrencyConverter}> {currency.name}</option>
            ))}
          </select>
          na
          <select
            className="form__select"
            value={selectedCurrencyTo}
            onChange={(event)=> setFinalCurrencyRate(event.target.value)}
          >
            {
              currencies.map((currency)=> (
                <option key={currency.id} value={currency.toFinalCurrencyConverter}>{currency.name}</option>
              ))
            }
          </select>
        </p>
        <p className="form__paragraph">
          <label for="amount"><span className="form__label">Wprowadź kwotę do przeliczenia:</span></label>
          <input className="form__amount js-form__amount" type="number" step="0.01" name="amount" id="amount" min="0"
            max="1000000000" required placeholder="Ilość pieniędzy" />
        </p>
        <p>
          <button className="form__button">Przelicz</button>
        </p>
        <p className="form__resultParagraph"></p>
      </form>
    </div >
  );

};

export default Form;