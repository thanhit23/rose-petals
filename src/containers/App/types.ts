import { CATEGORY_LIST } from './constant';

export interface CategoryListPayload {
  data: [];
}

export interface GetCategory {
  type: typeof CATEGORY_LIST;
  payload: CategoryListPayload;
}

export interface listCategoryType {
  name: string;
  slug: string;
  id: string;
}

export type Props = {
  categoryList: listCategoryType[];
};

export interface State {
  global: {
    categoryList: listCategoryType[];
  };
}
