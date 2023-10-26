type ProductMultipleOptions = {
  _id: string;
  slug: string;
  price: number;
  star: number;
  name: string;
  thumbnail: string;
};

export interface Props {
  productBestTheWeek: ProductMultipleOptions[];
  productLatest: ProductMultipleOptions[];
}
