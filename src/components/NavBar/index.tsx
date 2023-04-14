import React from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import ButtonBase from '@mui/material/ButtonBase';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';

import styles from './styles';
import DropDown from './Dropdown';
import messages from './messages';

export const listMenuItems = [
  { title: 'All Categories', path: '/product/search/all' },
  { title: 'Car', path: '/product/search/cart' },
  { title: 'Clothes', path: '/product/search/clothes' },
  { title: 'Electronics', path: '/product/search/electronics' },
  { title: 'Laptop', path: '/product/search/laptop' },
  { title: 'Desktop', path: '/product/search/desktop' },
  { title: 'Camera', path: '/product/search/camera' },
  { title: 'Toys', path: '/product/search/toys' },
];

function NavBar() {
  const listCategories = [
    { title: 'Home' },
    { title: 'Mega Menu' },
    { title: 'Full Screen Menu' },
    { title: 'Pages' },
    { title: 'User Account' },
    { title: 'Vendor Account' },
  ];

  return (
    <Paper sx={styles.paper}>
      <Container sx={styles.containerNavbar}>
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
        <Box sx={styles.boxListCategories}>
          {listCategories.map(({ title }, i) => (
            <Box key={i} sx={styles.boxCategoryItem}>
              <ButtonBase href="/login">{title}</ButtonBase>
            </Box>
          ))}
        </Box>
      </Container>
    </Paper>
  );
}

export default NavBar;
