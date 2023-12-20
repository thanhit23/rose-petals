export type MenuItem = {
  name?: string;
  slug: string;
  id?: string;
  sx?: object;
  onClick?: () => void;
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
