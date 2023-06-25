export interface Props {
  auth: object;
  children: JSX.Element;
  onSendRequestToken: (token: string) => void;
  notToken: () => void;
}

export interface States {
  global: { auth: object };
}
