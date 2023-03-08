import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { FormattedMessage } from 'react-intl';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';

import DropDown from './Dropdown';
import messages from './messages';
import styles from './styles';

function NavBar() {
  const listMenuItems = [
    { title: 'All Categories' },
    { title: 'Car' },
    { title: 'Clothes' },
    { title: 'Electronics' },
    { title: 'Laptop' },
    { title: 'Desktop' },
    { title: 'Camera' },
    { title: 'Toys' },
  ];

  return (
    <Paper sx={styles.paper}>
      <Container>
        <Box>
          <DropDown
            buttonIcon
            menuItem={listMenuItems}
            btnSx={styles.categoryBtn}
            buttonIconFirst={<GridViewRoundedIcon fontSize="small" />}
            buttonText={
              <Box component="p" sx={styles.boxBtn}>
                <FormattedMessage {...messages.buttonCategories} />
              </Box>
            }
          />
        </Box>
      </Container>
    </Paper>
  );
}

export default NavBar;
