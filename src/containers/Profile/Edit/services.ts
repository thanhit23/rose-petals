import { UserSubmitForm } from 'src/components/FormEditProfileUser/types';
import Service from 'src/service';

export const editUser = (data: UserSubmitForm) => Service.put('/v1/users', data);
