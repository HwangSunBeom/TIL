import { createGlobalStyle } from 'styled-components';

//yarn add styled-reset
import reset from 'styled-reset';

export const lightTheme = {
    bgColor : 'white',
    fontcolor: '#2c2c2c',
};

export const darkTheme = {
    fontcolor: 'white',
    bgColor: '#2c2c2c',
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
`;
