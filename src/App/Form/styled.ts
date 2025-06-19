import styled from "styled-components";
import ReactSelect from "react-select";

export const StyledSelect = styled(ReactSelect as any)`

.react-select__control {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 8px;
    flex-direction: row;
    display: flex;
    flex-wrap: nowrap;
    padding: 0 ;
    margin: 0;
    justify-content: space-between;
    cursor: pointer;
    pointer-events: auto;
    min-width: 150px;
  }

  .react-select__control--is-focused {
    flex-direction: row;

  }
  
  .react-select__menu {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    flex-direction: row;

  }

  .react-select__option {
    padding: 10px;
  }

  .react-select__value-container {
    padding: 0;
  }

  .react-select__single-value {
    margin: 5px 10px;
  }

  .react-select__input-container {
    width: 1px !important;
    opacity: 0;
  }

  .react-select__indicator {
    padding: 8px 16px;
  }
`;

export const FormContainer = styled.div`
    max-width: 100%;
`;


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

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-grow: 1;
  max-width: 90%;

    @media (max-width:767px) {
      flex: row;
    }

    @media (max-width:568px) {
      flex-direction: column;
      gap:16px
    }
`;

export const Paragraph = styled.p`
  color: black;
  font-size: 20px;
  width: 100%;
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