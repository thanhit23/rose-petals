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
  filterCheckout: FilterCheckout;
  onFilterCheckout: (filter: { province: string | null; district: string | null; ward: string | null }) => void;
  listData: {
    province: AddressCheckout[];
    district: AddressCheckout[];
    ward: AddressCheckout[];
  };
}
