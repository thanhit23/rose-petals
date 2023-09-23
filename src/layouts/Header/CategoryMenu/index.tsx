import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import Stack from '@mui/material/Stack';
import { isEmpty } from 'lodash';
import { compose } from 'redux';

import DropDown from 'src/components/DropDown';
import { State } from 'src/containers/App/types';

import messages from './messages';
import styles from './style';
import { Props } from './types';

function CategoryMenu({ categoryList, setCategoryId }: Props) {
  const [buttonText, setButtonText] = useState<JSX.Element | string>(<FormattedMessage {...messages.button} />);

  const newListCategory = categoryList.map(item => ({
    title: item.name,
    id: item.id,
    sx: { width: '200px' },
  }));

  const handleClickMenuItem = (e: Event | React.SyntheticEvent) => {
    const input = e.target as HTMLElement;
    !isEmpty(input.innerText) && setButtonText(input.innerText);
    setCategoryId(input.id);
  };

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <DropDown
          buttonIcon
          menuItem={[
            {
              id: '',
              title: 'All Categories',
              sx: { width: '200px' },
            },
            ...newListCategory,
          ]}
          onClickItem={handleClickMenuItem}
          btnSx={styles.categoryBtn}
          buttonText={buttonText}
        />
      </div>
    </Stack>
  );
}

const mapStateToProps = (state: State) => {
  const {
    global: { categoryList },
  } = state;
  return {
    categoryList,
  };
};

const withConnect = connect(mapStateToProps, null);
export default compose(withConnect)(CategoryMenu);
