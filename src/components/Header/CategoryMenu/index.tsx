import React from 'react';
import { FormattedMessage } from 'react-intl';
import Stack from '@mui/material/Stack';
import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';

import messages from './messages';
import DropDown from '../../DropDown';
import styles from './style';

function CategoryMenu() {
  const listMenuItems = [
    { title: 'All Categories' },
    { title: 'Car' },
    { title: 'clothes' },
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
          sxItem={{ px: '30px' }}
          menuItem={listMenuItems}
          btnSx={styles.categoryBtn}
          buttonText={<FormattedMessage {...messages.button} />}
          buttonIcon={<KeyboardArrowDownOutlined fontSize="small" />}
        />
      </div>
    </Stack>
  );
}

export default CategoryMenu;
