import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        background-color: #171717;
    }

    *{
        box-sizing: border-box;
    }
`;

export default GlobalStyle;