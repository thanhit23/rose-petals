import React from 'react';
import { useRoutes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  });

  return (
    <ThemeProvider theme={theme}>
      <LoadingIndicator />
      {useRoutes(routes())}
    </ThemeProvider>
  );
}

export default App;
