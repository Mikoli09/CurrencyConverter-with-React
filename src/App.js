




function App() {
  return (
    <section className="section">
        <header className="section__header">Kalkulator walutowy</header>
        <form>
            <p className="form__paragraph">Chcę przeliczyć
                <select className="form__select">
                    <option>EUR</option>
                    <option>USD</option>
                    <option>PLN</option>
                </select>
                na
                <select className="form__select">
                    <option>EUR</option>
                    <option>USD</option>
                    <option>PLN</option>
                </select>
            </p>
            <p className="form__paragraph">
                <label for="amount"><span className="form__label">Wprowadź kwotę do przeliczenia:</span></label>
                <input className="form__amount js-form__amount" type="number" step="0.01" name="amount" id="amount" min="0"
                    max="1000000000" required placeholder="Ilość pieniędzy"/>
            </p>
            <p>
                <button className="form__button">Przelicz</button>
            </p>
            <p className="form__resultParagraph"></p>
        </form>
    </section>
  );
}

export default App;
