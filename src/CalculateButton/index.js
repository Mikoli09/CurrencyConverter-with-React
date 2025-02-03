import "./style.css"

const CalculateButton = ({ currencyFrom, currencyTo }) => {

    const buttonActive = () => currencyFrom.id !== 0 && currencyTo.id !== 0;

    return (
        <p>
            <button
                className="form__button"
                disabled={!buttonActive()}
            >
                Przelicz
            </button>
        </p>
    );
};

export default CalculateButton;