export type ResponseAddressFormat = {
  province_id: string;
  province_name: string;
  district_id: string;
  district_name: string;
  ward_id: string;
  ward_name: string;
};

export type KeyAddress = 'province' | 'district' | 'ward';

export type OrderType = {
  fullName: string;
  phoneNumber: string;
  address: string;
  customerNote?: string;
  status: number;
  amount: number;
  quantity: number;
};

export type OrderDetailType = {
  products: {
    product: string;
    quantity: number;
    price: number;
  }[];
  order: string;
  discountPercent?: number;
  shipingFee?: number;
};
