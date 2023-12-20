import { ReactNode, SyntheticEvent } from 'react';

import { SxProps } from '@mui/material';

export interface AddressCheckout {
  id: string;
  name: string;
}

export interface Props {
  label: ReactNode;
  value: string;
  sx?: SxProps;
  name: string;
  onClear?: () => void;
  setValue: (value: AddressCheckout, reason?: string) => void;
  onChange?: (e: SyntheticEvent, value: AddressCheckout | string) => void;
  validate: any;
  data: AddressCheckout[];
}
