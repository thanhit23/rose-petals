import HomePage from '../../containers/HomePage';
import Cart from '../../containers/Cart';
import Checkout from '../../containers/Checkout';
import ProductDetail from '../../containers/ProductDetail';
import Payment from '../../containers/Payment';
import Order from '../../containers/Order';
import OrderDetail from '../../containers/OrderDetail';

export default [
  { path: '/user', component: HomePage, exact: true, index: true },
  { path: '/cart', component: Cart, index: true },
  { path: '/checkout', component: Checkout, index: true },
  { path: '/product/:slug', component: ProductDetail, index: true },
  { path: '/payment', component: Payment, index: true },
  { path: '/order', component: Order, index: true },
  { path: '/order/:id', component: OrderDetail, index: true },
];
