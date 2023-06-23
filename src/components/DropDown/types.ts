interface MenuItem {
  title: string;
  path?: string;
}

export interface DropDownTypes {
  buttonIconFirst?: JSX.Element;
  buttonText?: JSX.Element;
  buttonIcon?: boolean;
  buttonIconSx?: object;
  btnSx: object;
  menuItem: Array<MenuItem>;
  sxItem?: object;
}
