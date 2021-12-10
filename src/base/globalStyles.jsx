import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import colors from "./constants/colors";
import fonts from "./constants/fonts";

const GlobalStyles = createGlobalStyle`
    ${normalize};
    
    /* Additional Customizing reset CSS */
    * {
        margin: 0;
        font-family: ${fonts.family.en.base};
        box-sizing: border-box;
    }

    html {
        font-family: ${fonts.family.en.base};
        font-size: 16px;
    }

    body {
        font-family: ${fonts.family.en.base};
        color: ${colors.variable.black};
        background-color: ${colors.variable.white};
    }

    h1 {
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button,
    input,
    select,
    textarea {
        background-color: transparent;
        border: 0;
    }

    button:focus,
    input:focus,
    select:focus,
    textarea:focus {
        outline: none;
        box-shadow: none;
    }

    a,
    button {
        cursor: pointer;
    }

    button {
        padding: 0;
    }

    ul,
    ol {
        padding-left: 0;
        list-style: none;
    }
    `;

export default GlobalStyles;
