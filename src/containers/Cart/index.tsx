import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Avatar, Box, Button, Checkbox } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useQueryClient } from '@tanstack/react-query';
import { isEmpty } from 'lodash';
import { compose } from 'redux';

import { State } from 'src/common/types';
import CartProductListItem from 'src/components/CartProductListItem';
import CartSummary from 'src/components/CartSummary';
import BreadBarCartPage from 'src/components/FormSteps';
import useLocalStorage from 'src/hooks/useLocalStorage';
import { useDeleteProductCart } from 'src/queries/cart';

import messages from './messages';
import styles from './styles';
import { ProductCart, Props } from './types';

const Cart: React.FC<Props> = ({ productList }) => {
  const [storedValue, setStoredValue] = useLocalStorage<string[]>('productCartId', []);
  const [checkedProductCart, setCheckedProductCart] = useState<string[]>(storedValue);
  const [productCartList, setProductCartList] = useState<ProductCart[]>([]);
  const queryClient = useQueryClient();

  const deleteProduct = useDeleteProductCart({
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['getProductCartList'],
      });

      toast.success(<FormattedMessage {...messages.deleteMessage} />);
    },
  });

  const handleCheck = (id: string) => {
    setCheckedProductCart(prev => {
      const isChecked = checkedProductCart.includes(id);
      if (isChecked) {
        const newProductCartId = checkedProductCart.filter(item => item !== id);

        setStoredValue(newProductCartId);
        return newProductCartId;
      } else {
        const newProductCartId = [...prev, id];

        setStoredValue(newProductCartId);
        return newProductCartId;
      }
    });
  };

  useEffect(() => {
    const filterProductCart = productList.filter(product => storedValue.includes(product._id));
    setProductCartList(filterProductCart);
  }, [productList, checkedProductCart]);

  return (
    <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
      <BreadBarCartPage activeIndexPage={1} />
      <Grid container spacing={{ xs: 3 }}>
        <Grid item xs={12} md={8}>
          {!isEmpty(productList) ? (
            productList.map(data => (
              <Box key={data._id} display="flex" alignItems="center" gap="15px" marginBottom="1.5rem">
                <Checkbox
                  color="success"
                  checked={checkedProductCart.includes(data._id)}
                  onChange={() => handleCheck(data._id)}
                />
                <CartProductListItem productCart={data} onDeleteProduct={deleteProduct.mutate} />
              </Box>
            ))
          ) : (
            <Box className="title-cart-empty">
              <Avatar src="/emptyCart.png" sx={styles.boxEmptyCart} />
              <Box component="h4" sx={styles.titleEmptyCart}>
                <FormattedMessage {...messages.emptyCartMessage} />
              </Box>
              <Box sx={styles.boxBtnEmptyCart}>
                <Link to="/">
                  <Button type="submit" variant="contained" sx={styles.btnEmptyCart}>
                    <FormattedMessage {...messages.btnEmptyCart} />
                  </Button>
                </Link>
              </Box>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <CartSummary productList={productCartList} />
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = ({
  global: {
    product: {
      cart: { list },
    },
  },
}: State) => ({
  productList: list,
});

const withConnect = connect(mapStateToProps, null);

export const Component = compose(withConnect)(Cart);
