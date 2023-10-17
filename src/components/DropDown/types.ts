import React from 'react';

export type MenuItem = {
  title?: string | React.ReactNode;
  path?: string;
  id?: string;
  value?: string;
  sx?: object;
  onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, value: string | undefined) => void;
  component?: JSX.Element;
};

export interface DropDownTypes {
  avatar?: string;
  buttonIconFirst?: JSX.Element;
  buttonText?: JSX.Element | string;
  buttonIcon?: boolean;
  buttonIconSx?: object;
  btnSx: object;
  menuItem: MenuItem[];
  onClickItem?: (e: Event | React.SyntheticEvent) => void;
}
