import { createGlobalStyle } from "styled-components";

import montserratwoff from "./montserrat-v15-latin-regular.woff";
import montserratwoff2 from "./montserrat-v15-latin-regular.woff2";
import montserratblackwoff from "./Montserrat-Black.woff";
import montserratblackwoff2 from "./Montserrat-Black.woff2";
// import NameOfYourFontWoff2 from './nameOfYourFont.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), local('Montserrat'),
        url(${montserratwoff}) format('woff'),
        url(${montserratwoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat-black';
        src: local('MontserratBlack'), local('MontserratBlack'),
        url(${montserratblackwoff}) format('woff'),
        url(${montserratblackwoff2}) format('woff2'); 
         font-weight: 300;
        font-style: normal; 
    }
`;
