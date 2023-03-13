import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Popper from '@mui/material/Popper';
import React, { useState } from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';

import { DropDownTypes } from './types';

function DropDown({ buttonIconFirst, buttonText, buttonIcon, buttonIconSx, btnSx, menuItem, sxItem }: DropDownTypes) {
  const [open, setOpen] = useState(false);

  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => setOpen(prevOpen => !prevOpen);

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
    if (prevOpen.current && !open) {
      anchorRef.current?.focus();
    }

    prevOpen.current = open;
  }, [open]);

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
        {buttonIcon && <KeyboardArrowDownOutlined sx={{ ...buttonIconSx }} fontSize="small" />}
      </ButtonBase>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
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
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {menuItem.map(({ title }: { title: string }, key: number) => (
                    <MenuItem sx={{ fontSize: '14px', ...sxItem }} key={key} onClick={handleClose}>
                      {title}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default DropDown;
