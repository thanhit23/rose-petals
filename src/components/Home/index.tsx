import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import ButtonBase from '@mui/material/ButtonBase';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../resources/images/logo.png';
import UserButton from './UserButton';
import CartButton from './CartButton';

export default function SignUp() {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const useOutlinedInputStyles = makeStyles(() => ({
    root: {
      '&:hover > fieldset': {
        borderColor: '#D23F57 !important',
      },
    },
    focused: {
      '& > fieldset': {
        borderColor: '#D23F57 !important',
        borderWidth: '1px !important',
      },
    },
  }));
  const outlinedInputClasses = useOutlinedInputStyles();

  return (
    <div>
      <Box>
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            gap: '2px',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              marginRight: '16px',
              minWidth: '170px',
              alignItems: 'center',
            }}
          >
            <Link href="#">
              <img width="60" height="60" src={logo} alt="asdasdas" />
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flex: '1 1 0',
            }}
          >
            <Box
              sx={{
                flex: '1 1 0',
                maxWidth: '670px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <FormControl
                sx={{
                  width: '100%',
                }}
              >
                <OutlinedInput
                  id="input"
                  classes={outlinedInputClasses}
                  sx={{
                    borderRadius: '1200px',
                    paddingRight: 0,
                  }}
                  fullWidth
                  size="small"
                  placeholder="Searching for..."
                  startAdornment={
                    <SearchIcon
                      sx={{
                        fontSize: '1.25rem',
                        color: '#7D879C',
                        marginRight: '6px',
                      }}
                    />
                  }
                  endAdornment={
                    <Stack direction="row" spacing={2}>
                      <div>
                        <ButtonBase
                          ref={anchorRef}
                          id="composition-button"
                          aria-controls={open ? 'composition-menu' : undefined}
                          aria-expanded={open ? 'true' : undefined}
                          aria-haspopup="true"
                          onClick={handleToggle}
                          type="button"
                          color="#4B566B"
                          sx={{
                            display: 'flex',
                            paddingLeft: '24px',
                            paddingRight: '24px',
                            gap: '4px',
                            height: '3em',
                            color: '#4B566B',
                            backgroundColor: ' #F6F9FC',
                            alignItems: 'center',
                            whiteSpace: 'pre',
                            borderTopRightRadius: '300px',
                            borderBottomRightRadius: '300px',
                            borderLeft: '1px solid #DAE1E7',
                          }}
                          classes="Box-root"
                        >
                          Category
                          <KeyboardArrowDownOutlined />
                        </ButtonBase>
                        <Popper
                          open={open}
                          anchorEl={anchorRef.current}
                          role={undefined}
                          placement="bottom-start"
                          transition
                          disablePortal
                        >
                          {({ TransitionProps, placement }) => (
                            <Grow
                              {...TransitionProps}
                              style={{
                                transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                              }}
                            >
                              <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                  <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                  >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                  </MenuList>
                                </ClickAwayListener>
                              </Paper>
                            </Grow>
                          )}
                        </Popper>
                      </div>
                    </Stack>
                  }
                />
              </FormControl>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '12px',
            }}
          >
            <UserButton />
            <CartButton />
          </Box>
        </Container>
      </Box>
    </div>
  );
}
