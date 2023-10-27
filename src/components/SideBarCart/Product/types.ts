import { AuthType } from 'src/containers/Authenticated/types';

import { ProductCart, ProductList } from '../types';

export interface Props {
  data: ProductCart;
  onClose: () => void;
}
