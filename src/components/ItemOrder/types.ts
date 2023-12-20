export interface ItemOrderTypes {
  _id: string;
  user: {
    name: string;
    _id: string;
  };
  customerNote: string;
  address: string;
  amount: number;
  quantity: number;
  status: number;
  createdAt: string;
  updatedAt: string;
}
