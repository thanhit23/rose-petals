import { useMemo } from 'react';

import { ProductCart, ProductList } from 'src/containers/Cart/types';

const useCalculateTotalPrice = (productList: ProductList) => {
  const totalPrice = useMemo(() => {
    const result = productList.reduce(
      (total: number, productCart: ProductCart) => total + productCart.product.price * productCart.quantity,
      0,
    );

    return result;
  }, [productList]);

  return totalPrice;
};

export default useCalculateTotalPrice;
