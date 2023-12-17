import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Popover from '@material-ui/core/Popover';
import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';
import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';

import { DropDownTypes, MenuItem as MenuItemType } from './types';

function DropDown({
  avatar,
  buttonIconFirst,
  buttonText,
  buttonIcon,
  buttonIconSx,
  btnSx,
  menuItem,
  onClickItem,
}: DropDownTypes) {
  const [open, setOpen] = useState<boolean>(false);

  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => setOpen(prevOpen => !prevOpen);

  const handleClose = (event: Event | React.SyntheticEvent<Element, Event>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    onClickItem instanceof Function && onClickItem(event);
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
        {avatar && <Avatar src={avatar} sx={{ width: '44px', height: '44px' }} />}
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
            {menuItem.map(({ title, path, sx, id, onClick, value }: MenuItemType, key: number) => (
              <MenuItem
                sx={{ fontSize: '14px', ...sx }}
                key={key}
                id={id}
                onClick={e => {
                  handleClose(e);
                  onClick ? onClick(e, value) : null;
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
