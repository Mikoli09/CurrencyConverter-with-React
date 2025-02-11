import SectionHeader from "./SectionHeader";
import Form from "./Form";
import Clock from "./Clock";
import { Section } from "./styled";
import './scriptTest.js';

function App() {

  return (
    <Section>
      <Clock />
      <SectionHeader title={"Currency converter"} />
      <Form />
    </Section>
  );
}

export default App;