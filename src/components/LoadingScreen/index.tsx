import { Box, LinearProgress } from '@mui/material';

import useResponsive from 'src/hooks/useResponsive';

import './styles.css';

export default function LoadingScreen() {
  const isDashboard = useResponsive('up', 'md');

  return (
    <>
      {!isDashboard ? (
        <LinearProgress color="inherit" sx={{ width: 1, maxWidth: 360 }} />
      ) : (
        <Box>
          <div className="loading-screen">
            <div className="loading">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </Box>
      )}
    </>
  );
}
