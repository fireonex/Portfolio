import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";

export const GlobalStyle = createGlobalStyle `
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${Theme.colors.SecondaryBg};
        min-width: 360px;
    }
    
    section {
        padding: 70px 0;
    }
    
    a {
        text-decoration: none;
        color: ${Theme.colors.SecondaryBg};
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${Theme.colors.SecondaryBg};
    }
   
    section:nth-of-type(odd) {
        background-color: ${Theme.colors.SecondaryBg}
    }
    
    h3 {
        color: ${Theme.colors.SecondTitleFont};
        font-size: 20px;
        line-height: 21px;
        text-transform: uppercase;
    }
    
    p {
        color: ${Theme.colors.SecondTitleFont};
        font-size: 17px;
        font-weight: 400;
        line-height: 237.52%;
        max-width: 900px;
    }
`