import Header from "../Header";
import Form from "../Form";
import "./style.css"

const Section = ({currencies}) => (
    
<section className="section">
      <Header title={"Kalkulator walutowy"} />
      <Form currencies={currencies} />
    </section>
)

export default Section;