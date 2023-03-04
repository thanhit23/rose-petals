import React from 'react';
import { useRoutes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import routes from '../../routes';
import LoadingIndicator from '../LoadingIndicator';

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <LoadingIndicator />
      {useRoutes(routes())}
    </ThemeProvider>
  );
}

export default App;
