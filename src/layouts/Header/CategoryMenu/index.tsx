import React from 'react';
import { FormattedMessage } from 'react-intl';

import Stack from '@mui/material/Stack';

import DropDown from 'src/components/DropDown';

import messages from './messages';
import styles from './style';

function CategoryMenu() {
  const listMenuItems = [
    { title: 'All Categories', sx: { px: '30px' } },
    { title: 'Car', sx: { px: '30px' } },
    { title: 'Clothes', sx: { px: '30px' } },
    { title: 'Electronics', sx: { px: '30px' } },
    { title: 'Laptop', sx: { px: '30px' } },
    { title: 'Desktop', sx: { px: '30px' } },
    { title: 'Camera', sx: { px: '30px' } },
    { title: 'Toys', sx: { px: '30px' } },
  ];

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <DropDown
          buttonIcon
          menuItem={listMenuItems}
          btnSx={styles.categoryBtn}
          buttonText={<FormattedMessage {...messages.button} />}
        />
      </div>
    </Stack>
  );
}

export default CategoryMenu;
