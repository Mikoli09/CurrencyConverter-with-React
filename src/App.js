
import Header from "./Header";
import Form from "./Form";



function App() {

  const currencies = [
    { id: 1, name: "EUR", toSubcurrencyConverter: 1, toFinalCurrencyConverter: 1 },
    { id: 2, name: "USD", toSubcurrencyConverter: 0.9022, toFinalCurrencyConverter: 1.1084 },
    { id: 3, name: "PLN", toSubcurrencyConverter: 0.2359, toFinalCurrencyConverter: 4.2383 },
  ];






  return (
    <section className="section">
      <Header title={"Kalkulator walutowy"} />
      <Form currencies={currencies}  />
    </section>
  );
}

export default App;
