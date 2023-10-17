import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import Stack from '@mui/material/Stack';
import { isEmpty } from 'lodash';
import { compose } from 'redux';

import { ListCategory, State } from 'src/common/types';
import DropDown from 'src/components/DropDown';

import messages from './messages';
import styles from './style';

type Props = {
  categoryList: ListCategory[];
  onChangeCategoryId: React.Dispatch<React.SetStateAction<string>>;
};

const CategoryMenu: React.FC<Props> = ({ categoryList, onChangeCategoryId }) => {
  const [buttonText, setButtonText] = useState<JSX.Element | string>(<FormattedMessage {...messages.button} />);

  const categoryListMenu = [
    {
      id: '',
      title: <FormattedMessage {...messages.button} />,
      sx: { width: '200px' },
    },
    ...categoryList.map(item => ({
      title: item.name,
      id: item.id,
      sx: { width: '200px' },
    })),
  ];

  const handleClickMenuItem = (e: Event | React.SyntheticEvent) => {
    const input = e.target as HTMLElement;
    !isEmpty(input.innerText) && setButtonText(input.innerText);
    onChangeCategoryId(input.id);
  };

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <DropDown
          buttonIcon
          menuItem={categoryListMenu}
          onClickItem={handleClickMenuItem}
          btnSx={styles.categoryBtn}
          buttonText={buttonText}
        />
      </div>
    </Stack>
  );
};

const mapStateToProps = ({ global: { category } }: State) => ({
  categoryList: category.list,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(CategoryMenu);
