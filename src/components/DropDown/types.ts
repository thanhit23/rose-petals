export type MenuItem = {
  title?: string;
  path?: string;
  sx?: object;
  onClick?: () => void;
  component?: JSX.Element;
};

export interface DropDownTypes {
  buttonIconFirst?: JSX.Element;
  buttonText?: JSX.Element;
  buttonIcon?: boolean;
  buttonIconSx?: object;
  btnSx: object;
  menuItem: MenuItem[];
}
