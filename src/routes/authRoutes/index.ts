import HomePage from '../../containers/HomePage';
import Cart from '../../containers/Cart';
import Checkout from '../../containers/Checkout';
import ProductDetail from '../../containers/ProductDetail';
import Payment from '../../containers/Payment';

export default [
  { path: '/user', component: HomePage, exact: true, index: true },
  { path: '/cart', component: Cart, index: true },
  { path: '/checkout', component: Checkout, index: true },
  { path: '/product/:slug', component: ProductDetail, index: true },
  { path: '/payment', component: Payment, index: true },
];
