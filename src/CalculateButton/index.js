import "./style.css"

const CalculateButton = ({ currencyFrom, currencyTo }) => {

    const buttonActive = () => currencyFrom.id !== 0 && currencyTo.id !== 0;

    return (
        <p className="form__paragraph">
            <button
                className="form__button"
                disabled={!buttonActive()}
            >
                Convert
            </button>
        </p>
    );
};

export default CalculateButton;