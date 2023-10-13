import { listCategoryType } from 'src/containers/App/types';

export type Props = {
  categoryList: listCategoryType[];
  setCategoryId: React.Dispatch<React.SetStateAction<string>>;
};
