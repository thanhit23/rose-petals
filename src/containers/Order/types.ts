export interface OrderDetailProduct {
  _id: string;
  price: number;
  quantity: number;
  product: {
    name: string;
    _id: string;
    size: string[];
    thumbnail: string;
    slug: string;
  };
}

export interface OrderDetailType {
  subtotal: number;
  discountPercent: number;
  shipingFee: number;
  totalPrice: number;
  products: OrderDetailProduct[];
  createdAt: string;
  updatedAt: string;
  address: string;
  customerNote: string;
  status: number;
  methodPayment: string;
  phoneNumber: string;
  fullName: string;
}
