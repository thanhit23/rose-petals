import React from 'react';
import { useRoutes } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import routes from '../../routes';
import LoadingIndicator from '../LoadingIndicator';
import './style.css';

function App() {
  const theme = createTheme({
    components: {
      MuiContainer: {
        styleOverrides: {
          maxWidthLg: {
            maxWidth: '1280px !important',
          },
        },
      },
    },
    palette: {
      primary: {
        main: '#D23F57',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <LoadingIndicator />
      {useRoutes(routes())}
    </ThemeProvider>
  );
}

export default App;
