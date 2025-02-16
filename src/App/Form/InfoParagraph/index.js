import { StyledInfoParagraph, Link } from "./styled"
import { formatSourceDate } from "../../_utils/dateFormatter";

const InfoParagraph = ({date}) => {

  return (
    <StyledInfoParagraph>
      Currency rates sourced from
      <Link href="https://currencyapi.com" target="_blank"> currencyapi.com.</Link> <br/>
      Current as of: <b>{formatSourceDate(date)}</b>
    </StyledInfoParagraph>
  )
};

export default InfoParagraph