import React from 'react';
import { FormattedMessage } from 'react-intl';

import Stack from '@mui/material/Stack';

import styles from './style';
import messages from './messages';
import DropDown from '../../DropDown';

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
