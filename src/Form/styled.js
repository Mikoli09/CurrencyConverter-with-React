import styled from "styled-components";


export const StyledForm = styled.form`
 display: flex;
 flex-direction: column;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

@media (max-width:767px) {
    flex-direction: column;
    gap: 10px;
}
`;

export const Paragraph = styled.p`
  color: black;
  font-size: 20px;
  width: 100%;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-grow: 1;

@media (max-width:767px) {
  flex: row;
}
`;

export const Select = styled.select`
  padding: 10px 30px;
  background-color: rgb(245, 245, 241);
  border-radius: 5px;
  cursor: pointer;

`;

export const Label = styled.label`
  width: 100%;
  display: inline-block;
  text-align: center;
  font-size: 20px;

  @media (max-width:767px) {
    margin: 10px;
}
`;


export const Amount = styled.input`
  background-color: rgb(245, 245, 241);
  padding: 10px;
  border-radius: 5px;
  flex-grow: 1;

  @media (max-width:767px) {
    width: 100%;
}
`;

export const ResultParagraph = styled.p`
  padding: 10px;
  margin: 10px;
  font-size: 40px;
`;