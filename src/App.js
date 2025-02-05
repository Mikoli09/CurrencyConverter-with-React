import Header from "./Header";
import Form from "./Form";
import Clock from "./Clock";

function App() {

  return (
    <section className="section">
      <Clock />
      <Header title={"Currency converter"} />
      <Form />
    </section>
  );
}

export default App;
