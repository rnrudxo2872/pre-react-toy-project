import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from "styled-components"
import { BasicTheme } from './theme';
import { GlobalStyled } from './styledComponets/index.styled';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={BasicTheme}>
      <GlobalStyled />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);