type ProductMultipleOptions = {
  price: number;
  star: number;
  name: string;
  thumbnail: string;
};

export interface Props {
  productBestTheWeek: ProductMultipleOptions[];
  productLatest: ProductMultipleOptions[];
}
