import { useMemo } from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';

import customShadows from './customShadows';
import GlobalStyles from './globalStyles';
import palette from './palette';
import typography from './typography';

export default function ThemeProvider({ children }: { children: JSX.Element }) {
  // const themeMode = 'dark' || 'light';
  const themeMode = 'light';

  const themeOptions = useMemo(
    () => ({
      palette: palette(themeMode),
      typography,
      shape: { borderRadius: 8 },
      customShadows: customShadows(themeMode),
      components: {
        MuiContainer: {
          styleOverrides: {
            maxWidthLg: {
              maxWidth: '1280px !important',
            },
          },
        },
      },
    }),
    [themeMode],
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
