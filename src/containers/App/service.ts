import Service from 'src/service';

export const categoryLists = () => Service.get('/v1/categories');
export const getProductCartList = () => Service.get('/v1/carts');
