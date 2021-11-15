import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {

        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.75%;
        }
        -webkit-font-smoothing: antialiased;
    }
    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    p {
        line-height: 1.4;
    }
    a {
        text-decoration: none;
        text-underline-offset: 2px;
    }
    ul, ol {
        li {
            list-style: none;
        }
    }
    img {
        max-width: 100%;
    }
`;