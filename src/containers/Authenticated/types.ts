export interface Props {
  auth: object;
  children: JSX.Element;
}

export interface States {
  global: { auth: object };
}
