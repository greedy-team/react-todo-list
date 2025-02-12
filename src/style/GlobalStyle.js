import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: #bdbfc1;
        font-family: sans-serif;
        font-size: 16px;
        transition: background-color 0.3s, color 0.3s;
        text-align: center;
        align-items: center;
    }

    //#root {
    //    display: flex;
    //    max-width: 1280px;
    //    margin: 0 auto;
    //    padding: 2rem;
    //    justify-content: center;
    //    align-items: center;
    //    text-align: center;
    //}
`;

export default GlobalStyle;
