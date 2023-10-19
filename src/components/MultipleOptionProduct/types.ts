export interface Props {
  listData: {
    dataBestOfTheWeek: {
      price: number;
      star: number;
      name: string;
      thumbnail: string;
    }[];
    dataLatestProducts: {
      price: number;
      star: number;
      name: string;
      thumbnail: string;
    }[];
  };
}
