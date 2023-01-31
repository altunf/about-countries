import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${(props) => props.theme.backgroundColor}
}

`;
