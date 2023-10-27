import Service from '../../service';

export const deleteSideBarCart = (id: string) => Service.delete(`/v1/carts/${id}`);
