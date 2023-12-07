import React from 'react';

import { Skeleton } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

type Props = {
  className?: string;
};

const Loading: React.FC<Props> = () => (
  <React.Fragment>
    {Array(4)
      .fill(null)
      .map((_, key) => (
        <Grid item xs={12} sm={6} lg={3} key={key}>
          <Paper>
            <Box height={412}>
              <Skeleton variant="rectangular" height={290} />
              <Skeleton sx={{ mt: 1.6, mx: 1.5, py: 0.3 }} width="90%" />
              <Skeleton sx={{ mt: 0.3, mx: 1.5, py: 0.3 }} width="35%" />
              <Skeleton sx={{ mt: 0.3, mx: 1.5, py: 0.3 }} width="20%" />
            </Box>
          </Paper>
        </Grid>
      ))}
  </React.Fragment>
);

export default Loading;
