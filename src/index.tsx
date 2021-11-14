import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from "styled-components"
import { BasicTheme } from './theme';
import { GlobalStyled } from './styledComponets/index.styled';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools"
import { HelmetProvider } from "react-helmet-async"

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient} >
        <ThemeProvider theme={BasicTheme}>
          <GlobalStyled />
          <App />
          <ReactQueryDevtools initialIsOpen={true}/>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);