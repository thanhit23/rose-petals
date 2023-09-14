import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { compose } from 'redux';

import { Props, State } from 'src/containers/App/types';

import DropDown from './Dropdown';
import messages from './messages';
import styles from './styles';

function NavBar({ categoryList }: Props) {
  return (
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
export default compose(withConnect)(NavBar);
