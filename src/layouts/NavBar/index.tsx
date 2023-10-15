import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { compose } from 'redux';

import { ListCategory, State } from 'src/common/types';

import DropDown from './Dropdown';
import messages from './messages';
import styles from './styles';

type Props = {
  categoryList: ListCategory[];
};

const NavBar: React.FC<Props> = ({ categoryList }) => (
  <Paper sx={styles.paper}>
    <Container sx={styles.containerNavbar}>
      <Box>
        <DropDown
          buttonIcon
          menuItem={categoryList}
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

const mapStateToProps = ({ global: { category } }: State) => ({
  categoryList: category.list,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(NavBar);
