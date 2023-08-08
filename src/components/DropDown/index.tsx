import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Popover from '@material-ui/core/Popover';
import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';
import ButtonBase from '@mui/material/ButtonBase';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';

import { DropDownTypes, MenuItem as MenuItemType } from './types';

function DropDown({ buttonIconFirst, buttonText, buttonIcon, buttonIconSx, btnSx, menuItem, sxItem }: DropDownTypes) {
  const [open, setOpen] = useState(false);

  const anchorRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    if (prevOpen.current && !open) anchorRef.current?.focus();

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
      <Popover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Paper>
          <MenuList
            autoFocusItem={open}
            id="composition-menu"
            aria-labelledby="composition-button"
            onKeyDown={handleListKeyDown}
          >
            {menuItem.map(({ title, path, onClick }: MenuItemType, key: number) => (
              <MenuItem
                sx={{ fontSize: '14px', ...sxItem }}
                key={key}
                onClick={e => {
                  handleClose(e);
                  onClick ? onClick() : null;
                }}
              >
                {path ? <Link to={path}>{title}</Link> : title}
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      </Popover>
    </>
  );
}

export default DropDown;
