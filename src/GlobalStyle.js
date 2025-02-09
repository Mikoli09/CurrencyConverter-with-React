import { createGlobalStyle } from "styled-components";
import background from "./dollars.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        font-family: 'Montserrat', sans-serif;
        background-image: url("${background}");
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;      
    }
  `;