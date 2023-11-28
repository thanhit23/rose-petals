export type ResponseAddressFormat = {
  province_id: string;
  province_name: string;
  district_id: string;
  district_name: string;
  ward_id: string;
  ward_name: string;
};

export type KeyAddress = 'province' | 'district' | 'ward';
