import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';

import { PATH_PUBLIC } from 'src/routes/paths';

import styles from './styles';
import { DropDownTypes } from './types';

function DropDown({
  buttonIconFirst,
  buttonText,
  buttonIcon,
  buttonIconSx,
  btnSx,
  menuItem,
  onClickItem,
}: DropDownTypes) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const prevOpen = useRef(open);
  const handleToggle = () => setOpen(prevOpen => !prevOpen);

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) return;

    onClickItem instanceof Function && onClickItem(event);
    setOpen(false);
  };

  useEffect(() => {
    if (prevOpen.current && !open) anchorRef.current?.focus();

    prevOpen.current = open;
  }, [open]);

  const renderIcon = () => (
    <KeyboardArrowDownOutlined
      sx={{
        ...buttonIconSx,
        transition: 'all 250ms ease-in-out',
        transform: () => (open ? 'rotate(0deg)' : 'rotate(-90deg)'),
      }}
      fontSize="small"
    />
  );

  return (
    <>
      <ButtonBase
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        type="button"
        sx={btnSx}
      >
        {buttonIconFirst}
        {buttonText}
        {buttonIcon && renderIcon()}
      </ButtonBase>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        id="composition-button"
        placement="bottom-start"
        transition
        disablePortal
        sx={{ zIndex: 100 }}
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
                <Box>
                  {menuItem.map(({ name, id, sx }, key: number) => (
                    <Box sx={{ fontSize: '14px', ...sx }} key={key} onClick={handleClose}>
                      <Box
                        component={Link}
                        to={PATH_PUBLIC.product.category(id as string, name as string)}
                        sx={styles.linkMenuItem}
                      >
                        <Box component="span" sx={styles.boxItem}>
                          {name}
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default DropDown;
