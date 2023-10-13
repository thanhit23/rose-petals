import React from 'react';

import Box from '@mui/material/Box';

import { TabPanelProps } from './types';

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

export default TabPanel;
