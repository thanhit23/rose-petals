import Service from 'src/service';

export const deleteSideBarCart = (id: string) => Service.delete(`/v1/carts/${id}`);
