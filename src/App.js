import SectionHeader from "./SectionHeader";
import Form from "./Form";
import Clock from "./Clock";

function App() {

  return (
    <section className="section">
      <Clock />
      <SectionHeader title={"Currency converter"} />
      <Form />
    </section>
  );
}

export default App;
