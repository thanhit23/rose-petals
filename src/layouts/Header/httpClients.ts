import Service from '../../service';

export const deleteProductCart = (id: string) => Service.delete(`/v1/carts/${id}`);
