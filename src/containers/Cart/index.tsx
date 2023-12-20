import React from 'react';
import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { CheckBox } from '@mui/icons-material';
import { Avatar, Box, Button } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useQueryClient } from '@tanstack/react-query';
import { compose } from 'redux';

import { State } from 'src/common/types';
import CartProductListItem from 'src/components/CartProductListItem';
import CartSummary from 'src/components/CartSummary';
import BreadBarCartPage from 'src/components/FormSteps';
import { useDeleteProductCart } from 'src/queries/cart';

import messages from './messages';
import styles from './styles';
import { Props } from './types';

const Cart: React.FC<Props> = ({ productList }) => {
  const queryClient = useQueryClient();

  const deleteProduct = useDeleteProductCart({
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['getProductCartList'],
      });

      toast.success(<FormattedMessage {...messages.deleteMessage} />);
    },
  });

  return (
    <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
      <BreadBarCartPage activeIndexPage={1} />
      <Grid container spacing={{ xs: 3 }}>
        <Grid item xs={12} md={8}>
          {productList.length > 0 ? (
            productList.map(data => (
              <Box key={data._id} display="flex" alignItems="center" gap="15px" marginBottom="1.5rem">
                <CheckBox />
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
          <CartSummary productList={productList} />
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
