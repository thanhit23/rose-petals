import { map } from 'lodash';

import { UserSubmitForm } from 'src/components/FormEditProfileUser/types';
import Service from 'src/service';

const formData = new FormData();

export const editUser = (data: UserSubmitForm) => Service.put('/v1/users', data);
export const uploadFile = (data: object) => {
  Service.setHeaderDefault({
    'Content-Type': 'multipart/form-data',
  });
  map(data, i => formData.append('file', i));
  return Service.post('/file', formData);
};
export const updateAvatar = (avatar: string) => Service.put('/v1/users/upload-avatar', { avatar });
