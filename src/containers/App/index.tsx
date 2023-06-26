import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import LoadingScreen from 'src/components/LoadingScreen';
import routes from 'src/routes';

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
      <Suspense fallback={<LoadingScreen />}>
        <LoadingIndicator />
        {useRoutes(routes())}
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
