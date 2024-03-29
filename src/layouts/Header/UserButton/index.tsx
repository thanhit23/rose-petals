import React, { useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import Paper from '@mui/material/Paper';
import { isEmpty } from 'lodash';
import { compose } from 'redux';

import { State } from 'src/common/types';
import DropDown from 'src/components/DropDown';
import { logout } from 'src/containers/Authenticated/actions';
import { Auth } from 'src/containers/Authenticated/types';
import LoginForm from 'src/containers/Login/LoginForm';
import { integrationPathImage } from 'src/helpers';
import store from 'src/store';

import messages from './messages';
import styles from './styles';

type Props = Auth;

const UserButton: React.FC<Props> = ({ auth }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');

  const descriptionElementRef = useRef<HTMLElement>(null);

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    store.dispatch(logout());
    navigate('/');
  };

  useEffect(() => {
    if (!isEmpty(auth)) setOpen(false);
  }, [auth]);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const renderPersonButton = () => {
    if (isEmpty(auth)) {
      return (
        <Button onClick={handleClickOpen('body')} sx={styles.buttonPerson}>
          <PersonOutlineOutlinedIcon />
        </Button>
      );
    }
    const menuItem = [
      { title: <FormattedMessage {...messages.profile} />, path: '/profile', sx: { p: 0, '> a': { p: '6px 16px' } } },
      {
        title: <FormattedMessage {...messages.logout} />,
        onClick: handleLogout,
      },
    ];

    return <DropDown avatar={integrationPathImage(auth.avatar)} btnSx={styles.buttonPerson} menuItem={menuItem} />;
  };

  return (
    <div>
      {renderPersonButton()}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={styles.dialog}
      >
        <Paper elevation={3} sx={styles.paperLogin}>
          <LoginForm onCloseDialog={handleClose} />
        </Paper>
      </Dialog>
    </div>
  );
};

const mapStateToProps = ({ global: { auth } }: State) => ({
  auth,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(UserButton);
