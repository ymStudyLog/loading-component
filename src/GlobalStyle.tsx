import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    *,
    *::before,
    *::after{
        box-sizing: border-box;
        border: none;
        margin:0;
        padding:0;
    }
`;

export default GlobalStyle;
