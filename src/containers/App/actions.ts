import { CATEGORY_LIST } from './constant';
import { GetCategory } from './types';

export const getCategoryAction = (data: []): GetCategory => ({
  type: CATEGORY_LIST,
  payload: { data },
});
