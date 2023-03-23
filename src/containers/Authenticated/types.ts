export interface Props {
  auth: object;
  children: JSX.Element;
  onSendRequestToken: (token: string) => void;
  notToken: () => void;
}

export interface States {
  global: { auth: object };
}

export interface PropsSendReqToken {
  type: string;
  payload: {
    token: string;
  };
}
export interface ApiResponse {
  data: object;
  status: number;
}
