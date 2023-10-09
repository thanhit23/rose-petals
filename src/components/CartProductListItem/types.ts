export interface Props {
  productCart: {
    _id: string;
    product: {
      _id: string;
      images: string;
      name: string;
      price: number;
      slug: string;
    };
    quantity: number;
  };
}
