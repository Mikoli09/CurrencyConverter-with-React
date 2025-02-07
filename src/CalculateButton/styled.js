import styled, {css} from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 20px;
  border: 2px solid;
  border-radius: 5px;
  background-color: rgb(245, 245, 241);
  cursor: pointer;
  transition: 0.2s;

  &:not([disabled]):hover {
    background-color: rgb(219, 219, 215);
    transform: scale(1.02);
 }

 ${({disabled}) => disabled && css`
     cursor: default;
     background-color: rgb(245, 245, 241);
 `}
`;
