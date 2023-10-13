export interface Props {
  listAddress: {
    id: string;
    address: string;
    addressLine: string;
    phoneNumber: string;
  }[];
}

export interface DataModalDelete {
  id: string;
  address: string;
}

export type DeleteId = string;
