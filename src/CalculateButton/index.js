import "./style.css"

const CalculateButton = ({ currencyFrom, currencyTo }) => {

    return (
        <p className="form__paragraph">
            <button
                className="form__button"
                disabled={currencyFrom.id === 0 || currencyTo.id === 0}
            >
                Convert
            </button>
        </p>
    );
};

export default CalculateButton;