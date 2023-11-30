import { UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { PostOrderDetailType, PostOrderType } from 'src/common/types';
import { AuthType } from 'src/containers/Authenticated/types';
import { ProductList } from 'src/containers/Cart/types';

import { Nullable } from '../../common/types';
import { AddressCheckout } from '../AutocompleteAddress/types';

export interface ListData {
  province: AddressCheckout[];
  district: AddressCheckout[];
  ward: AddressCheckout[];
}

export type FilterCheckout = {
  province: Nullable<string>;
  district: Nullable<string>;
  ward: Nullable<string>;
};

export interface Props {
  auth: AuthType;
  filterCheckout: FilterCheckout;
  onFilterCheckout: (filter: { province: string | null; district: string | null; ward: string | null }) => void;
  listData: {
    province: AddressCheckout[];
    district: AddressCheckout[];
    ward: AddressCheckout[];
  };
  productList: ProductList;
  onCreateOrder: UseMutationResult<AxiosResponse<any, any>, unknown, PostOrderType, unknown>;
  onCreateOrderDetail: UseMutationResult<AxiosResponse<any, any>, unknown, PostOrderDetailType, unknown>;
}
