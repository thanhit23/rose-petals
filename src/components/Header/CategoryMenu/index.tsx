import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

import DropDown from 'src/components/DropDown';

import messages from './messages';
import styles from './style';

function CategoryMenu() {
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
    <Stack direction="row" spacing={2}>
      <div>
        <DropDown
          buttonIcon
          sxItem={{ px: '30px' }}
          menuItem={listMenuItems}
          btnSx={styles.categoryBtn}
          buttonText={<FormattedMessage {...messages.button} />}
        />
      </div>
    </Stack>
  );
}

export default CategoryMenu;
