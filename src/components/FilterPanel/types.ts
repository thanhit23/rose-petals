export interface PropsFilter {
  listBrand: {
    _id: string;
    logo: string;
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
  }[];
  setPrice?: React.Dispatch<
    React.SetStateAction<{
      priceMin: number;
      priceMax: number;
    }>
  >;
  setRating?: React.Dispatch<
    React.SetStateAction<{
      ratingMin: number;
      ratingMax: number;
    }>
  >;
}
