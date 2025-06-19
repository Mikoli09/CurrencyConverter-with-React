import { StyledInfoParagraph, Link } from "./styled"
import { formatSourceDate } from "../../_utils/dateFormatter";

interface InfoParagraphProps {
  date: Date
}

const InfoParagraph = ({ date }: InfoParagraphProps) => {

  return (
    <StyledInfoParagraph>
      Currency rates sourced from
      <Link href="https://currencyapi.com" target="_blank"> currencyapi.com.</Link> <br />
      Current as of: <b>{formatSourceDate(date)}</b>
    </StyledInfoParagraph>
  )
};

export default InfoParagraph